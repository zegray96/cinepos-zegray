const articles = [
    {
        "id": 1,
        "title": "Reloj Michelle Plateado con iman",
        "description": "",
        "price": 879,
        "pictureUrl": "Reloj-Michelle-Plateado-con-iman.jpg"
    },
    {
        "id": 2,
        "title": "Reloj Fausta Negro",
        "description": "",
        "price": 879,
        "pictureUrl": "Reloj-Fausta-Negro.jpg"
    },
    {
        "id": 3,
        "title": "Reloj Loto Blanco",
        "description": "",
        "price": 799,
        "pictureUrl": "Reloj-Loto-Blanco.jpg"
    },
    {
        "id": 4,
        "title": "Reloj Digital Forever Blanco",
        "description": "",
        "price": 699,
        "pictureUrl": "Reloj-Digital-Forever-Blanco.jpg"
    },
    {
        "id": 5,
        "title": "Anillo Girasol acero blanco",
        "description": "",
        "price": 249,
        "pictureUrl": "Anillo-Girasol-acero-blanco.jpg"
    },
    {
        "id": 6,
        "title": "Collar Reir 42 Cm Acero blanco",
        "description": "",
        "price": 499,
        "pictureUrl": "Collar-Reir-42-Cm-Acero-blanco.jpg"
    },
    {
        "id": 7,
        "title": "Esclava Inicial 'S' 6,5 Cm Acero blanco",
        "description": "",
        "price": 399,
        "pictureUrl": "Esclava-Inicial-Acero-blanco.jpg"
    },
    {
        "id": 8,
        "title": "Collar Kaley 45 Cm Acero blanco",
        "description": "",
        "price": 999,
        "pictureUrl": "Collar-Kaley-45-Cm-Acero-blanco.jpg"
    },
    {
        "id": 9,
        "title": "Collar Cruz Vacia 45 Cm Acero dorado",
        "description": "",
        "price": 419,
        "pictureUrl": "Collar-Cruz-Vacia-45-Cm-Acero-dorado.jpg"
    },
    {
        "id": 10,
        "title": "Pulsera Donkey 19 Cm Acero dorado",
        "description": "",
        "price": 435,
        "pictureUrl": "Pulsera-Donkey-19-Cm-Acero-dorado.jpg"
    },
    {
        "id": 11,
        "title": "Aros Key Acero dorado",
        "description": "",
        "price": 269,
        "pictureUrl": "Aros-Key-Acero-dorado.jpg"
    },
    {
        "id": 12,
        "title": "Collar Burlete 44 Cm Acero Dorado",
        "description": "",
        "price": 719,
        "pictureUrl": "Collar-Burlete-44-Cm-Acero-Dorado.jpg"
    },
    {
        "id": 13,
        "title": "Aros Juliaca Acero quirurgico",
        "description": "",
        "price": 299,
        "pictureUrl": "Aros-Juliaca-Acero-quirurgico.jpg"
    },
    {
        "id": 14,
        "title": "Anillo Keira Estrella Acero quirurgico",
        "description": "",
        "price": 199,
        "pictureUrl": "Anillo-Keira-Estrella-Acero-quirurgico.jpg"
    },
    {
        "id": 15,
        "title": "Collar Valquiria Alita 42 Cm Acero Quirúrgico",
        "description": "",
        "price": 389,
        "pictureUrl": "Collar-Valquiria-Alita-42-Cm-Acero-Quirurgico.jpg"
    },
    {
        "id": 16,
        "title": "Collar Valquiria Lunita 42 Cm Acero Quirúrgico",
        "description": "",
        "price": 389,
        "pictureUrl": "Collar-Valquiria-Lunita-42-Cm-Acero-Quirurgico.jpg"
    }

];

const article = {
    "id": 1,
    "title": "Reloj Michelle Plateado con iman",
    "description": "",
    "price": 879,
    "pictureUrl": "Reloj-Michelle-Plateado-con-iman.jpg"
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