import { addDoc, doc, getDoc, getFirestore, getDocs, collection, orderBy, query, where, limit, serverTimestamp } from "firebase/firestore";


export const getArticleById = (id) => {
    const db = getFirestore();
    const artRef = doc(db, "articles", id);

    return getDoc(artRef);
}

export const getArticles = () => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, orderBy("category.id", "asc"));

    return getDocs(q);
}

export const getArticlesByCategorySlug = (slug) => {
    const db = getFirestore();
    const articlesRef = collection(db, "articles");
    const q = query(articlesRef, where("category.slug", "==", slug));

    return getDocs(q);
}

export const sendOrder = (order) => {
    // seteamos fecha de servidor
    order.date = serverTimestamp();
    const db = getFirestore();
    const ordersRef = collection(db, "orders");

    return addDoc(ordersRef, order);
}