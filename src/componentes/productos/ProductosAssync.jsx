import React from 'react'

const Productos = [{
  "id": 1,
  "nombre": "Puff",
  "apellido": "Cathcart",
  "detalle": "Removal of remaining testis",
  "precio": "$5612.42",
  "stock": "En stock",
  "imagen": ""
}, {
  "id": 2,
  "nombre": "Juliette",
  "apellido": "Dunan",
  "detalle": "Repair of scleral staphyloma with graft",
  "stock": "En stock",
  "precio": "$4699.91",
  "imagen": ""
}, {
  "id": 3,
  "nombre": "Shaun",
  "apellido": "Bretherick",
  "detalle": "Repair of cystocele with graft or prosthesis",
  "stock": "En stock",
  "precio": "$4825.52",
  "imagen": ""
}, {
  "id": 4,
  "nombre": "Gertrud",
  "apellido": "Haill",
  "detalle": "Microscopic examination of specimen from liver, biliary tract, and pancreas, parasitology",
  "stock": "En stock",
  "precio": "$4618.68",
  "imagen": ""
}, {
  "id": 5,
  "nombre": "Tomasine",
  "apellido": "Crowdson",
  "detalle": "Gastroscopy through artificial stoma",
  "stock": "En stock",
  "precio": "$5573.22",
  "imagen": ""
}, {
  "id": 6,
  "nombre": "Beatrix",
  "apellido": "Maron",
  "detalle": "Intravenous pyelogram",
  "stock": "En stock",
  "precio": "$4857.43",
  "imagen": ""
}, {
  "id": 7,
  "nombre": "Philip",
  "apellido": "Scoggin",
  "detalle": "Permanent colostomy",
  "stock": "En stock",
  "precio": "$5687.94",
  "imagen": ""
}, {
  "id": 8,
  "nombre": "Giralda",
  "apellido": "Jacob",
  "detalle": "Ventricular shunt to structure in head and neck",
  "stock": "En stock",
  "precio": "$5285.14",
  "imagen": ""
}, {
  "id": 9,
  "nombre": "Kristen",
  "apellido": "Hun",
  "detalle": "Insertion of biological graft",
  "stock": "En stock",
  "precio": "$5860.84",
  "imagen": ""
}, {
  "id": 10,
  "nombre": "Jonathan",
  "apellido": "Callender",
  "detalle": "Other external maxillary antrotomy",
  "stock": "En stock",
  "precio": "$5631.31",
  "imagen": ""
}, {
  "id": 11,
  "nombre": "Kellby",
  "apellido": "Antony",
  "detalle": "Microscopic examination of specimen from operative wound, culture",
  "stock": "En stock",
  "precio": "$4973.03",
  "imagen": ""
}, {
  "id": 12,
  "nombre": "Alwyn",
  "apellido": "Keinrat",
  "detalle": "Other operations on cranial and peripheral nerves",
  "stock": "En stock",
  "precio": "$4589.93",
  "imagen": ""
}, {
  "id": 13,
  "nombre": "Obidiah",
  "apellido": "Barney",
  "detalle": "Dorsal or lateral slit of prepuce",
  "stock": "En stock",
  "precio": "$5352.16",
  "imagen": ""
}, {
  "id": 14,
  "nombre": "Jewelle",
  "apellido": "Furman",
  "detalle": "Colonoscopy",
  "stock": "En stock",
  "precio": "$5338.20",
  "imagen": ""
}, {
  "id": 15,
  "nombre": "Kathie",
  "apellido": "McRobbie",
  "detalle": "Other myringotomy",
  "stock": "En stock",
  "precio": "$4814.05",
  "imagen": ""
}, {
  "id": 16,
  "nombre": "Rog",
  "apellido": "Utting",
  "detalle": "Other fusion of foot",
  "stock": "En stock",
  "precio": "$5128.56",
  "imagen": ""
}, {
  "id": 17,
  "nombre": "Dru",
  "apellido": "Blankman",
  "detalle": "Otoscopy",
  "stock": "En stock",
  "precio": "$5899.72",
  "imagen": ""
}, {
  "id": 18,
  "nombre": "Athena",
  "apellido": "Fairbard",
  "detalle": "Diathermy",
  "stock": "En stock",
  "precio": "$5113.99",
  "imagen": ""
}, {
  "id": 19,
  "nombre": "Colan",
  "apellido": "Craddock",
  "detalle": "Open reduction of fracture without internal fixation, carpals and metacarpals",
  "stock": "En stock",
  "precio": "$5482.92",
  "imagen": ""
}, {
  "id": 20,
  "nombre": "Kamila",
  "apellido": "Coade",
  "detalle": "Other excision or destruction of lesion or tissue of cervix",
  "stock": "En stock",
  "precio": "$5222.49",
  "imagen": ""
}]
function getItems() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000);
  });
}

  export function getSingleItem(itemid) {
    let itemRes = Productos.find((item)=>{
      return item.id === Number(itemid);
    })
  };


export default getItems;