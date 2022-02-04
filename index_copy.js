// var firebaseConfig = {
//     apiKey: "AIzaSyCsO0ds4BJCFKNewK6y1GoW2bcbDR8v8ew",
//     authDomain: "sevak-a8df2.firebaseapp.com",
//     databaseURL: "https://sevak-a8df2-default-rtdb.firebaseio.com",
//     projectId: "sevak-a8df2",
//     storageBucket: "sevak-a8df2.appspot.com",
//     messagingSenderId: "968591151850",
//     appId: "1:968591151850:web:02ceca00991b9f19ebfd93",
//     measurementId: "G-23H5FK9253"
// };



// firebase.initializeApp(firebaseConfig);
// const database = firebase.database()
// const db = firebase.firestore();




// const addItem = () => {
    
//     // Storage
//     const ref = storage.ref('images');
//     let file = document.getElementById('img_mod').files[0];
//     let date = new Date;
//     let name = date.getTime() + '-' + file.name

//     const metadata = { contentType: file.type }
//     const task = ref.child(name).put(file, metadata);

//     task.then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//             let name_data = document.getElementById('nameMod').value; type = document.getElementById('typeMod').value; location_data = document.getElementById('locationMod').value;
//             let genID = date.getTime();
//             auth.onAuthStateChanged((res) => {
//                 db.collection("list_of_data").doc(`${genID}`).set({
//                     name: name_data, type: type, location_data: location_data, key: res.uid, imageurl: url, imagename: name,
//                 })
//                     .then(() => {
//                         console.log("Document successfully written!");
//                         // showItem();
//                         // loader.style.display = "none"
//                     })
//                     .catch((error) => {
//                         console.error("Error writing document: ", error);
//                         // alert(error);
//                         // loader.style.display = "none"
//                     });
//             })
//         })
//         .catch((err) => { alert(err); })
// }