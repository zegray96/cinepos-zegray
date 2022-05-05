import { addDoc, doc, getDoc, getFirestore, getDocs, collection, orderBy, query, where, limit, serverTimestamp, Timestamp, writeBatch, startAt, endAt } from "firebase/firestore";
import { convertStringToLowerCase } from "./convertString";

export const getArticleById = (id) => {
    const db = getFirestore();
    const artRef = doc(db, "articles", id);

    return getDoc(artRef);
}

export const getArticlesHome = () => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, limit(10));

    return getDocs(q);
}

export const getArticles = (searchData) => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    let q = null;
    if (searchData) {
        let lowerCaseSearchData = convertStringToLowerCase(searchData);
        q = query(articlesRef, orderBy("title", "asc"), startAt(lowerCaseSearchData), endAt(lowerCaseSearchData + "\uf8ff"));
    } else {
        q = query(articlesRef, orderBy("category.id", "asc"));
    }


    return getDocs(q);
}

export const getArticlesByCategorySlug = (slug) => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("category.slug", "==", slug));

    return getDocs(q);
}

/** Funcion con batch */
export async function sendOrder(order) {
    // seteamos fecha de servidor
    order.date = serverTimestamp();
    // seteamos estado de orden
    order.status = [{
        detail: "Pedido generado",
        date: Timestamp.now()
    }];

    const db = getFirestore();
    const batch = writeBatch(db);


    await Promise.all(
        order.articles.map(async (article) => {
            // buscamos el articulo 
            let articleBd = await getDoc(doc(db, "articles", article.id));
            // Controlamos si encontro el articulo
            if (articleBd.data()) {
                let newStock = articleBd.data().stock - article.quantity;
                // Controlamos el stock
                if (newStock < 0) {
                    return Promise.reject(`Articulo con id: ${article.id} no posee stock suficiente`);
                }
                // actualizamos el stock de articulo
                let artRef = doc(db, "articles", article.id);
                batch.update(artRef, { stock: newStock });
            } else {
                return Promise.reject(`Articulo con id: ${article.id} no encontrado`);
            }
        })
    )
    let orderId = null;
    const ordersRef = doc(collection(db, "orders"));
    // obtenemos el id antes de crear
    orderId = ordersRef.id;
    // creamos orden
    batch.set(ordersRef, order);

    return batch.commit().then(() => {
        return Promise.resolve(orderId);
    }).catch((err) => {
        return Promise.reject("Ocurrio un problema al crear el pedido");
    });
}

export const getOrderById = (id) => {
    const db = getFirestore();
    const orderRef = doc(db, "orders", id);

    return getDoc(orderRef);
}

