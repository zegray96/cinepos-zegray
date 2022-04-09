const articles = [
    {
        "id": 1,
        "title": "Reloj Michelle Plateado con iman",
        "description": "",
        "price": 879,
        "picture_url": "Reloj-Michelle-Plateado-con-iman.jpg",
        "stock": 100,
    },
    {
        "id": 2,
        "title": "Reloj Fausta Negro",
        "description": "",
        "price": 879,
        "picture_url": "Reloj-Fausta-Negro.jpg",
        "stock": 100,
    },
    {
        "id": 3,
        "title": "Reloj Loto Blanco",
        "description": "",
        "price": 799,
        "picture_url": "Reloj-Loto-Blanco.jpg",
        "stock": 100,
    },
    {
        "id": 4,
        "title": "Reloj Digital Forever Blanco",
        "description": "",
        "price": 699,
        "picture_url": "Reloj-Digital-Forever-Blanco.jpg",
        "stock": 100,
    },
    {
        "id": 5,
        "title": "Anillo Girasol acero blanco",
        "description": "",
        "price": 249,
        "picture_url": "Anillo-Girasol-acero-blanco.jpg",
        "stock": 100,
    },
    {
        "id": 6,
        "title": "Collar Reir 42 Cm Acero blanco",
        "description": "",
        "price": 499,
        "picture_url": "Collar-Reir-42-Cm-Acero-blanco.jpg",
        "stock": 100,
    },
    {
        "id": 7,
        "title": "Esclava Inicial 'S' 6,5 Cm Acero blanco",
        "description": "",
        "price": 399,
        "picture_url": "Esclava-Inicial-Acero-blanco.jpg",
        "stock": 100,
    },
    {
        "id": 8,
        "title": "Collar Kaley 45 Cm Acero blanco",
        "description": "",
        "price": 999,
        "picture_url": "Collar-Kaley-45-Cm-Acero-blanco.jpg",
        "stock": 100,
    },
    {
        "id": 9,
        "title": "Collar Cruz Vacia 45 Cm Acero dorado",
        "description": "",
        "price": 419,
        "picture_url": "Collar-Cruz-Vacia-45-Cm-Acero-dorado.jpg",
        "stock": 100,
    },
    {
        "id": 10,
        "title": "Pulsera Donkey 19 Cm Acero dorado",
        "description": "",
        "price": 435,
        "picture_url": "Pulsera-Donkey-19-Cm-Acero-dorado.jpg",
        "stock": 100,
    },
    {
        "id": 11,
        "title": "Aros Key Acero dorado",
        "description": "",
        "price": 269,
        "picture_url": "Aros-Key-Acero-dorado.jpg",
        "stock": 100,
    },
    {
        "id": 12,
        "title": "Collar Burlete 44 Cm Acero Dorado",
        "description": "",
        "price": 719,
        "picture_url": "Collar-Burlete-44-Cm-Acero-Dorado.jpg",
        "stock": 100,
    },
    {
        "id": 13,
        "title": "Aros Juliaca Acero quirurgico",
        "description": "",
        "price": 299,
        "picture_url": "Aros-Juliaca-Acero-quirurgico.jpg",
        "stock": 100,
    },
    {
        "id": 14,
        "title": "Anillo Keira Estrella Acero quirurgico",
        "description": "",
        "price": 199,
        "picture_url": "Anillo-Keira-Estrella-Acero-quirurgico.jpg",
        "stock": 100,
    },
    {
        "id": 15,
        "title": "Collar Valquiria Alita 42 Cm Acero Quirúrgico",
        "description": "",
        "price": 389,
        "picture_url": "Collar-Valquiria-Alita-42-Cm-Acero-Quirurgico.jpg",
        "stock": 100,
    },
    {
        "id": 16,
        "title": "Collar Valquiria Lunita 42 Cm Acero Quirúrgico",
        "description": "",
        "price": 389,
        "picture_url": "Collar-Valquiria-Lunita-42-Cm-Acero-Quirurgico.jpg",
        "stock": 100,
    }

];

const article = {
    "id": 1,
    "title": "Reloj Michelle Plateado con iman",
    "description": "",
    "price": 879,
    "picture_url": "Reloj-Michelle-Plateado-con-iman.jpg",
    "stock": 100,
};

export const getArticles = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(articles);
        }, 2000);
    });
}

export const getArticle = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(article);
        }, 2000);
    });
}