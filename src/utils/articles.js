const articles = [
    {
        "id": 1,
        "title": "Reloj Michelle Plateado con iman",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 879,
        "picture_url": "https://i.ibb.co/BPBZczN/Reloj-Michelle-Plateado-con-iman.jpg",
        "stock": 2,
        "category": {
            "id": 1,
            "name": "Relojes"
        }
    },
    {
        "id": 2,
        "title": "Reloj Fausta Negro",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 879,
        "picture_url": "https://i.ibb.co/bKYBk1n/Reloj-Fausta-Negro.jpg",
        "stock": 100,
        "category": {
            "id": 1,
            "name": "Relojes"
        }
    },
    {
        "id": 3,
        "title": "Reloj Loto Blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 799,
        "picture_url": "https://i.ibb.co/nmfDjjh/Reloj-Loto-Blanco.jpg",
        "stock": 100,
        "category": {
            "id": 1,
            "name": "Relojes"
        }
    },
    {
        "id": 4,
        "title": "Reloj Digital Forever Blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 699,
        "picture_url": "https://i.ibb.co/br6V1Sd/Reloj-Digital-Forever-Blanco.jpg",
        "stock": 100,
        "category": {
            "id": 1,
            "name": "Relojes"
        }
    },
    {
        "id": 5,
        "title": "Anillo Girasol acero blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 249,
        "picture_url": "https://i.ibb.co/zQdWPqS/Anillo-Girasol-acero-blanco.jpg",
        "stock": 100,
        "category": {
            "id": 2,
            "name": "Acero Blanco"
        }
    },
    {
        "id": 6,
        "title": "Collar Reir 42 Cm Acero blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 499,
        "picture_url": "https://i.ibb.co/SwjpvbD/Collar-Reir-42-Cm-Acero-blanco.jpg",
        "stock": 100,
        "category": {
            "id": 2,
            "name": "Acero Blanco"
        }
    },
    {
        "id": 7,
        "title": "Esclava Inicial 'S' 6,5 Cm Acero blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 399,
        "picture_url": "https://i.ibb.co/vQqhXGS/Esclava-Inicial-Acero-blanco.jpg",
        "stock": 100,
        "category": {
            "id": 2,
            "name": "Acero Blanco"
        }
    },
    {
        "id": 8,
        "title": "Collar Kaley 45 Cm Acero blanco",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 999,
        "picture_url": "https://i.ibb.co/8KzN3PZ/Collar-Kaley-45-Cm-Acero-blanco.jpg",
        "stock": 100,
        "category": {
            "id": 2,
            "name": "Acero Blanco"
        }
    },
    {
        "id": 9,
        "title": "Collar Cruz Vacia 45 Cm Acero dorado",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 419,
        "picture_url": "https://i.ibb.co/vXy8bKC/Collar-Cruz-Vacia-45-Cm-Acero-dorado.jpg",
        "stock": 100,
        "category": {
            "id": 3,
            "name": "Acero Dorado"
        }
    },
    {
        "id": 10,
        "title": "Pulsera Donkey 19 Cm Acero dorado",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 435,
        "picture_url": "https://i.ibb.co/FHxXgxv/Pulsera-Donkey-19-Cm-Acero-dorado.jpg",
        "stock": 100,
        "category": {
            "id": 3,
            "name": "Acero Dorado"
        }
    },
    {
        "id": 11,
        "title": "Aros Key Acero dorado",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 269,
        "picture_url": "https://i.ibb.co/PQSVvdW/Aros-Key-Acero-dorado.jpg",
        "stock": 100,
        "category": {
            "id": 3,
            "name": "Acero Dorado"
        }
    },
    {
        "id": 12,
        "title": "Collar Burlete 44 Cm Acero Dorado",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 719,
        "picture_url": "https://i.ibb.co/7nY7NRY/Collar-Burlete-44-Cm-Acero-Dorado.jpg",
        "stock": 100,
        "category": {
            "id": 3,
            "name": "Acero Dorado"
        }
    },
    {
        "id": 13,
        "title": "Aros Juliaca Acero quirurgico",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 299,
        "picture_url": "https://i.ibb.co/6W93qFF/Aros-Juliaca-Acero-quirurgico.jpg",
        "stock": 100,
        "category": {
            "id": 4,
            "name": "Acero Quirurgico"
        }
    },
    {
        "id": 14,
        "title": "Anillo Keira Estrella Acero quirurgico",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 199,
        "picture_url": "https://i.ibb.co/hCYTt9G/Anillo-Keira-Estrella-Acero-quirurgico.jpg",
        "stock": 100,
        "category": {
            "id": 4,
            "name": "Acero Quirurgico"
        }
    },
    {
        "id": 15,
        "title": "Collar Valquiria Alita 42 Cm Acero Quirúrgico",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 389,
        "picture_url": "https://i.ibb.co/M8gzmW8/Collar-Valquiria-Alita-42-Cm-Acero-Quirurgico.jpg",
        "stock": 100,
        "category": {
            "id": 4,
            "name": "Acero Quirurgico"
        }
    },
    {
        "id": 16,
        "title": "Collar Valquiria Lunita 42 Cm Acero Quirúrgico",
        "description": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim officia odio repudiandae exercitationem laboriosam necessitatibus amet praesentium corrupti suscipit consequuntur placeat, architecto sed minus dicta ad neque cumque impedit iusto.",
        "price": 389,
        "picture_url": "https://i.ibb.co/4SnGLGn/Collar-Valquiria-Lunita-42-Cm-Acero-Quirurgico.jpg",
        "stock": 100,
        "category": {
            "id": 4,
            "name": "Acero Quirurgico"
        }
    }

];

const categories = [
    {
        "id": 1,
        "name": "Relojes",
        "slug": "relojes"
    },
    {
        "id": 2,
        "name": "Acero Blanco",
        "slug": "acero-blanco"
    },
    {
        "id": 3,
        "name": "Acero Dorado",
        "slug": "acero-dorado"
    },
    {
        "id": 4,
        "name": "Acero Quirurgico",
        "slug": "acero-quirurgico"
    }
]

/**Methods */
export const getArticles = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(articles);
        }, 2000);
    });
}

export const getArticleById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let article = articles.find(e => e.id == id);
            if (article) {
                resolve(article);
            } else {
                reject("Articulo no encontrado");
            }
        }, 2000);
    });
}

export const getArticlesByCategoryId = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let articlesFilter = articles.filter(e => e.category.id == id);
            if (Object.keys(articlesFilter).length !== 0) {
                resolve(articlesFilter);
            } else {
                reject("Categoria no posee articulos");
            }

        }, 2000);
    });
}

export const getCategoryBySlug = (slug) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let category = categories.find(e => e.slug == slug);
            if (category) {
                resolve(category);
            } else {
                reject("Categoria no encontrada");
            }
        }, 2000);
    });
}
/**End methods */