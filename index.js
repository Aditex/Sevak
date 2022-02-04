function service(){
    window.location = "./Main/inquiry.html"
}

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

firebase.initializeApp(firebaseConfig);
const database = firebase.database()
const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()
const addItem = () => {
    
    // Storage
    const ref = storage.ref('images');
    let file = document.getElementById('img_mod').files[0];
    let date = new Date;
    let name = date.getTime() + '-' + file.name

    const metadata = { contentType: file.type }
    const task = ref.child(name).put(file, metadata);

    task.then(snapshot => snapshot.ref.getDownloadURL())
        .then(url => {
            let name_data = document.getElementById('nameMod').value; type = document.getElementById('typeMod').value; location_data = document.getElementById('locationMod').value;
            let genID = date.getTime();
            
            firebase.database().ref("list_of_data/"+name_data).set(
                {
                    name : nameMod.value,
                    type : typeMod.value,
                    location : locationMod.value,
                    number : numberMod.value,
                    age: ageMod.value,
                    timing : timingMod.value,
                    // sales_person:ModSalesPerson.value,
                    sallary : salaryMod.value,
                    imageurl : url
                }

            )
        })
        .catch((err) => { alert(err); })
}



var nameMod = document.getElementById('nameMod');
var typeMod = document.getElementById('typeMod');
var locationMod = document.getElementById('locationMod');
var numberMod = document.getElementById('numberMod');
var ageMod = document.getElementById('ageMod');
var timingMod = document.getElementById('timeMod');
var salaryMod = document.getElementById('salaryMod');


var Data = ["This Is A Data"];



firebase.database().ref('list_of_data').once('value',
function(AllRecords){
    AllRecords.forEach(
        function(CurrentRecord){
            var name_data = CurrentRecord.val().name;
            var type = CurrentRecord.val().type;
            var location_data = CurrentRecord.val().location;
            var number = CurrentRecord.val().number;
            var age = CurrentRecord.val().age;
            var sallary = CurrentRecord.val().sallary;
            var timing = CurrentRecord.val().timing
            var img_url = CurrentRecord.val().imageurl;

            console.log(name_data)
            Data.push([name_data, type, location_data, number, age, sallary]);
            tag = "<div class='card'><div class='bg-image hover-overlay ripple' data-mdb-ripple-color='light'><img src='"+img_url+"' class='img-fluid'/><a href='#!'><div class='mask' style='background-color: rgba(251, 251, 251, 0.15);'></div></a></div><div class='card-body'><h5 class='card-title'>Card title</h5><p class='card-text'>Name:"+name_data+"  , Job: "+type+"  , Location: "+location_data+"  , Phone Number: "+number+"  Timing: "+timing+"  Age: "+age+"  Expected Salary: "+sallary+"</p><a href='#!' class='btn btn-primary'>Button</a></div></div>"

            document.getElementById('card-container').innerHTML+=tag
        }
    );
    
});





