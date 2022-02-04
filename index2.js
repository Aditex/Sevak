function service(){
    window.location = "./Main/inquiry.html"
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
// import{getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js"



var firebaseConfig = {
apiKey: "AIzaSyCsO0ds4BJCFKNewK6y1GoW2bcbDR8v8ew",
authDomain: "sevak-a8df2.firebaseapp.com",
databaseURL: "https://sevak-a8df2-default-rtdb.firebaseio.com",
projectId: "sevak-a8df2",
storageBucket: "sevak-a8df2.appspot.com",
messagingSenderId: "968591151850",
appId: "1:968591151850:web:02ceca00991b9f19ebfd93",
measurementId: "G-23H5FK9253"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import{getStorage, ref as sRef, uploadBytesResumable, getDownloadURL} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-storage.js"

getStorage

var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox')
var extlap = document.getElementById('extlab')
var myimg = document.getElementById('output')
var SelBtn = document.getElementById('selbtn')
var UpBtn = document.getElementById('upbtn')
var DownBtn = document.getElementById('downbtn')


var input = document.createElement('input');
input.type = 'file'

input.onchange = e=>{
    files = e.target.files;

    var extention = GetExtName(files[0]);
    var name = GetFileName(files[0]);
    namebox.value = name;
    extlap.innerHTML = extention;

    reader.readAsDataURL(files[0]);
}


reader.onload = function(){
    myimg.serc = reader.result;
}

function GetExtName(file){
    var temp = file.name.split('.');
    var fname = temp.slice(0, -1).join('.')
    return fname;
}



tag = "<div class='card'><div class='bg-image hover-overlay ripple' data-mdb-ripple-color='light'><img src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp' class='img-fluid'/><a href='#!'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a></div><div class='card-body'><h5 class='card-title'>Card title</h5><p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p><a href='#!' class='btn btn-primary'>Button</a></div></div>"

document.getElementById('card-container').innerHTML+=tag
