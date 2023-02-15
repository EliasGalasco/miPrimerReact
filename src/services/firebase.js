import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  doc,
  getDoc,
  collection,
  getDocs,
  where,
  query,
  addDoc,
  orderBy,
  limit,
  writeBatch
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ0GVyFdBQ9rqgNZAPviGgG_ctB_Nloow",
  authDomain: "miprimerreact.firebaseapp.com",
  projectId: "miprimerreact",
  storageBucket: "miprimerreact.appspot.com",
  messagingSenderId: "302602586076",
  appId: "1:302602586076:web:73bbf8e417f03de65bb119",
  measurementId: "G-KK40VSSPZD",
};

/*Iniciamos la base de datos */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const analytics = getAnalytics(app);

/*Conectar firestore */
/*--1 Obtener el primer producto-- */
export async function getSingleItem(itemid) {
  const docRef = doc(db, "productos", itemid);
  const snapshot = await getDoc(docRef);
  //{...snapshot.data(), id: snapshot.id}
  const docData = snapshot.data();
  docData.id = snapshot.id;
  return docData;
}
/*2 Obtener todos los products de fireStore */
export async function getItems(){
  const productsCollection = collection(db, "productos");
  const q = query(productsCollection, limit(10))
  const querySnapshot = await getDocs(q);
  const dataDocs = querySnapshot.docs.map(documento => ({...documento.data(), id: documento.id}))
  return dataDocs
}

/*3 Obtener productos segun su CATEGORIA */
export async function getCategoryId(categoryid){
  const productsCollection = collection(db, 'productos') 
  const q = query (productsCollection, where("category", "==", categoryid))
  
  const querySnapshot = await getDocs(q)
  const dataDocs = querySnapshot.docs.map((documento) => ({...documento.data(), id: documento.id}))
  return dataDocs
}
/*Crear Una seccion order en FireBase  */
export async function creadorOrdenDeCompra(order){
  const ordersCollection = collection(db, "orders");
  const orderDoc = await addDoc(ordersCollection, order);
  return orderDoc.id;
}
// export async function exportProds(){
//   const productsCollection = collection(db, 'productos') 
//   const productos = [{
//     "titulo": "Aloe Beta",
//     "id": 1,
//     "detalle": "Removal of remaining testis",
//     "precio": 5612.42,
//     "discount": 20,
//     "category": "bebibles",
//     "stock": "",
//     "cantidad": 22,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_cbb0dc82c1a72fc599396a6fd87f54ee.jpg"
//   }, {
//     "titulo": "Aqtua",
//     "id": 2,
//     "detalle": "Repair of scleral staphyloma with graft",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 4699.91,
//     "cantidad": 13,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_bd0c54bfc8b43bb3750ace3bc562c18d.jpg"
//   }, {
//     "titulo": "Caffezino",
//     "id": 3,
//     "detalle": "Repair of cystocele with graft or prosthesis",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 4825.52,
//     "discount": 30,
//     "cantidad": 10,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_d7c8f7e99d47608f4b9cfe984727d2c7.jpg"
//   }, {
//     "titulo": "DolceVita",
//     "id": 4,
//     "detalle": "Microscopic examination of specimen from liver, biliary tract, and pancreas, parasitology",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 4618.68,
//     "discount": 10,
//     "cantidad": 15,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1d2e51494cfccd549cb536b925047e98.jpg"
//   }, {
//     "titulo": "Ego10",
//     "id": 5,
//     "detalle": "Gastroscopy through artificial stoma",
//     "stock": "",
//     "category": "bebibles",
//     "precio": 5573.22,
//     "cantidad": 11,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9a0e89f6207f4d6af7554b9030892583.jpg"
//   }, {
//     "titulo": "EgoFruta",
//     "id": 6,
//     "detalle": "Intravenous pyelogram",
//     "stock": "En stock",
//     "category": "bebibles",
//     "discount": 25,
//     "precio": 4857.43,
//     "cantidad": 17,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_6cce6aec908b70fbb57ff9ad8c106a7f.jpg"
//   }, {
//     "titulo": "EgoLifre",
//     "id": 7,
//     "detalle": "Permanent colostomy",
//     "stock": "",
//     "category": "polvo",
//     "precio": 5687.94,
//     "cantidad": 15,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9c60242e9cbedab13b01b808703cb5c5.jpg"
//   }, {
//     "titulo": "EgoFruit",
//     "id": 8,
//     "detalle": "Ventricular shunt to structure in head and neck",
//     "stock": "En stock",
//     "category": "bebibles",
//     "discount": 30,
//     "precio": 5285.14,
//     "cantidad": 14,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_dd8b296ceabf8b015cd9463906395e11.jpg"
//   }, {
//     "titulo": "Estop",
//     "id": 9,
//     "detalle": "Insertion of biological graft",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 5860.84,
//     "cantidad": 10,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_8dc578e323fc3d1cf497bc9b7d5f4b6c.jpg"
//   }, {
//     "titulo": "Shake",
//     "id": 10,
//     "detalle": "Other external maxillary antrotomy",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 5631.31,
//     "cantidad": 20,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1fce734aa66abd16110966e09cddcc02.jpg"
//   }, {
//     "titulo": "FemPlus",
//     "id": 11,
//     "detalle": "Microscopic examination of specimen from operative wound, culture",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 4973.03,
//     "cantidad": 60,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_d5a04cc13444a192b802b0bd9ce951cd.jpg"
//   }, {
//     "titulo": "Fiber",
//     "id": 12,
//     "detalle": "Other operations on cranial and peripheral nerves",
//     "stock": "En stock",
//     "category": "polvo",
//     "discount": 25,
//     "precio": 4589.93,
//     "cantidad": 10,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_2b5a91e7dd0f39e9032b6a280f3e13f1.jpg"
//   }, {
//     "titulo": "HomoPlus",
//     "id": 13,
//     "detalle": "Dorsal or lateral slit of prepuce",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 5352.16,
//     "cantidad": 15,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_6b62264ba42ec2a01dd92fbdd67c42e1.jpg"
//   }, {
//     "titulo": "Biocros",
//     "id": 14,
//     "detalle": "Colonoscopy",
//     "stock": "En stock",
//     "category": "bebibles",
//     "precio": 5338.20,
//     "cantidad": 11,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_56595cc92b1b98dbb4c68106e6748468.jpg"
//   }, {
//     "titulo": "OmniOst",
//     "id": 15,
//     "detalle": "Other myringotomy",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 4814.05,
//     "cantidad": 6,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_bbd31e8a2f834948fbe8741c964f48fb.jpg"
//   }, {
//     "titulo": "OmniPlus",
//     "id": 16,
//     "detalle": "Other fusion of foot",
//     "stock": "En stock",
//     "category": "bebibles",
//     "precio": 5128.56,
//     "cantidad": 9,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_ee1179a9eb07871a52c137ac919492c6.jpg"
//   }, {
//     "titulo": "OmniViu",
//     "id": 17,
//     "detalle": "Otoscopy",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 5899.72,
//     "cantidad": 22,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9f415acce5382ba17b470b091b7b075c.jpg"
//   }, {
//     "titulo": "OneCMix",
//     "id": 18,
//     "detalle": "Diathermy",
//     "stock": "En stock",
//     "category": "polvo",
//     "precio": 5113.99,
//     "cantidad": 14,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_081ff2a3068c18e306fd51c454f95e53.jpg"
//   }, {
//     "titulo": "PowerMaker",
//     "id": 19,
//     "detalle": "Open reduction of fracture without internal fixation, carpals and metacarpals",
//     "stock": "En stock",
//     "category": "bebibles",
//     "precio": 5482.92,
//     "cantidad": 15,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_c667264ed423c1a6aee28afedd1f851f.jpg"
//   }, {
//     "titulo": "Focus",
//     "id": 20,
//     "detalle": "Other excision or destruction of lesion or tissue of cervix",
//     "stock": "En stock",
//     "category": "bebibles",
//     "precio": 5222.49,
//     "cantidad": 19,
//     "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1f03e85d78361469d2deaf26fa2fa616.jpg"
//   }];
//   for (let item of productos ){
//     addDoc(productsCollection, item).then()
    
//   }
//   for (let item of productos) {
//     item.index = item.id;
//     delete item.id;
//     addDoc(productsCollection, item).then(
//     );
//   }
// }

export async function exportDataWithBatch() {
  const productsCollection = collection(db, "productos");
  const batch = writeBatch(db);
  const productos = [{
    "titulo": "Aloe Beta",
    "id": 1,
    "detalle": "Removal of remaining testis",
    "precio": 5612.42,
    "discount": 20,
    "category": "bebibles",
    "stock": "",
    "cantidad": 22,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_cbb0dc82c1a72fc599396a6fd87f54ee.jpg"
  }, {
    "titulo": "Aqtua",
    "id": 2,
    "detalle": "Repair of scleral staphyloma with graft",
    "stock": "En stock",
    "category": "polvo",
    "precio": 4699.91,
    "cantidad": 13,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_bd0c54bfc8b43bb3750ace3bc562c18d.jpg"
  }, {
    "titulo": "Caffezino",
    "id": 3,
    "detalle": "Repair of cystocele with graft or prosthesis",
    "stock": "En stock",
    "category": "polvo",
    "precio": 4825.52,
    "discount": 30,
    "cantidad": 10,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_d7c8f7e99d47608f4b9cfe984727d2c7.jpg"
  }, {
    "titulo": "DolceVita",
    "id": 4,
    "detalle": "Microscopic examination of specimen from liver, biliary tract, and pancreas, parasitology",
    "stock": "En stock",
    "category": "polvo",
    "precio": 4618.68,
    "discount": 10,
    "cantidad": 15,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1d2e51494cfccd549cb536b925047e98.jpg"
  }, {
    "titulo": "Ego10",
    "id": 5,
    "detalle": "Gastroscopy through artificial stoma",
    "stock": "",
    "category": "bebibles",
    "precio": 5573.22,
    "cantidad": 11,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9a0e89f6207f4d6af7554b9030892583.jpg"
  }, {
    "titulo": "EgoFruta",
    "id": 6,
    "detalle": "Intravenous pyelogram",
    "stock": "En stock",
    "category": "bebibles",
    "discount": 25,
    "precio": 4857.43,
    "cantidad": 17,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_6cce6aec908b70fbb57ff9ad8c106a7f.jpg"
  }, {
    "titulo": "EgoLifre",
    "id": 7,
    "detalle": "Permanent colostomy",
    "stock": "",
    "category": "polvo",
    "precio": 5687.94,
    "cantidad": 15,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9c60242e9cbedab13b01b808703cb5c5.jpg"
  }, {
    "titulo": "EgoFruit",
    "id": 8,
    "detalle": "Ventricular shunt to structure in head and neck",
    "stock": "En stock",
    "category": "bebibles",
    "discount": 30,
    "precio": 5285.14,
    "cantidad": 14,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_dd8b296ceabf8b015cd9463906395e11.jpg"
  }, {
    "titulo": "Estop",
    "id": 9,
    "detalle": "Insertion of biological graft",
    "stock": "En stock",
    "category": "polvo",
    "precio": 5860.84,
    "cantidad": 10,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_8dc578e323fc3d1cf497bc9b7d5f4b6c.jpg"
  }, {
    "titulo": "Shake",
    "id": 10,
    "detalle": "Other external maxillary antrotomy",
    "stock": "En stock",
    "category": "polvo",
    "precio": 5631.31,
    "cantidad": 20,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1fce734aa66abd16110966e09cddcc02.jpg"
  }, {
    "titulo": "FemPlus",
    "id": 11,
    "detalle": "Microscopic examination of specimen from operative wound, culture",
    "stock": "En stock",
    "category": "polvo",
    "precio": 4973.03,
    "cantidad": 60,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_d5a04cc13444a192b802b0bd9ce951cd.jpg"
  }, {
    "titulo": "Fiber",
    "id": 12,
    "detalle": "Other operations on cranial and peripheral nerves",
    "stock": "En stock",
    "category": "polvo",
    "discount": 25,
    "precio": 4589.93,
    "cantidad": 10,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_2b5a91e7dd0f39e9032b6a280f3e13f1.jpg"
  }, {
    "titulo": "HomoPlus",
    "id": 13,
    "detalle": "Dorsal or lateral slit of prepuce",
    "stock": "En stock",
    "category": "polvo",
    "precio": 5352.16,
    "cantidad": 15,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_6b62264ba42ec2a01dd92fbdd67c42e1.jpg"
  }, {
    "titulo": "Biocros",
    "id": 14,
    "detalle": "Colonoscopy",
    "stock": "En stock",
    "category": "bebibles",
    "precio": 5338.20,
    "cantidad": 11,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_56595cc92b1b98dbb4c68106e6748468.jpg"
  }, {
    "titulo": "OmniOst",
    "id": 15,
    "detalle": "Other myringotomy",
    "stock": "En stock",
    "category": "polvo",
    "precio": 4814.05,
    "cantidad": 6,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_bbd31e8a2f834948fbe8741c964f48fb.jpg"
  }, {
    "titulo": "OmniPlus",
    "id": 16,
    "detalle": "Other fusion of foot",
    "stock": "En stock",
    "category": "bebibles",
    "precio": 5128.56,
    "cantidad": 9,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_ee1179a9eb07871a52c137ac919492c6.jpg"
  }, {
    "titulo": "OmniViu",
    "id": 17,
    "detalle": "Otoscopy",
    "stock": "En stock",
    "category": "polvo",
    "precio": 5899.72,
    "cantidad": 22,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_9f415acce5382ba17b470b091b7b075c.jpg"
  }, {
    "titulo": "OneCMix",
    "id": 18,
    "detalle": "Diathermy",
    "stock": "En stock",
    "category": "polvo",
    "precio": 5113.99,
    "cantidad": 14,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_081ff2a3068c18e306fd51c454f95e53.jpg"
  }, {
    "titulo": "PowerMaker",
    "id": 19,
    "detalle": "Open reduction of fracture without internal fixation, carpals and metacarpals",
    "stock": "En stock",
    "category": "bebibles",
    "precio": 5482.92,
    "cantidad": 15,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_c667264ed423c1a6aee28afedd1f851f.jpg"
  }, {
    "titulo": "Focus",
    "id": 20,
    "detalle": "Other excision or destruction of lesion or tissue of cervix",
    "stock": "En stock",
    "category": "bebibles",
    "precio": 5222.49,
    "cantidad": 19,
    "imagen": "https://dnp4fok4drjmm.cloudfront.net/pages/altagama/125_1f03e85d78361469d2deaf26fa2fa616.jpg"
  }];
  for (let item of productos) {
    item.index = item.id;
    delete item.id;

    const newDoc = doc(productsCollection);
    batch.set(newDoc, item);
  }

  const commitDone = await batch.commit();
  console.log("--->", commitDone);
}