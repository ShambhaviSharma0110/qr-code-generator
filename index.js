/*
const data_div = document.querySelector("main-data");

db.collection("Products")
  .get()
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data_div.innerHTML +=
        "<div class = 'items'><h3>" +
        doc.data().product_name +
        doc.data().product_category +
        doc.data().product_desc +
        doc.data().product_price +
        "</h3></div>";
    });
  });
  */
  /*
 function getdata() {
   var Products = document.getElementById("main-data").value;
   //firebase data retrieval function
   //path of your data
   //.once will get all your data in one time
   firebase
     .database()
     .ref("Products/" + Products)
     .once("value")
     .then(function (snapshot) {
       //here we will get data
       //enter your field name
       var name = snapshot.val().product_name;
       var category = snapshot.val().product_category;
       var desc = snapshot.val().product_desc;
        var price = snapshot.val().product_price;

       //now we have data in variables
       //now show them in our html

       document.getElementById("name").innerHTML = name ;
       document.getElementById("category").innerHTML = category;
       document.getElementById("description").innerHTML = desc;
       document.getElementById("price").innerHTML = price;
     });
 }
 */
/*
 var firebaseRef = new Firebase("http://INSTANCE.firebaseio.com");
 firebaseRef.child(".info/connected").on("value", function (connectedSnap) {
   if (connectedSnap.val() === true) {
     document.getElementById("content").innerHTML= "we're connected!"
   } else {
     "we're disconnected!"
   }
 });


  var rootRef = firebase.database().ref().child("Products");
  rootRef.on("child_added", snap => {
           var name = snap.child("product_name").val();
           var category = snap.child("product_category").val();
           var desc = snap.child("product_desc").val();
           var price = snap.child("product_price").val();

           $("#content").append("<tr><td>"+ name +"</td><td>"+ category + "</td><td>"+ desc +"</td><td>" + price + "</td></tr>");

            document.getElementById("category").innerHTML = category;
            document.getElementById("description").innerHTML = desc;
            document.getElementById("name").innerHTML = name;
            document.getElementById("price").innerHTML = price;
  });

var firebase = require('firebase');
var firebaseConfig = {
  apiKey: "AIzaSyAqhMOuHEhA6CjxmYL9STf8_xhXSj3RIak",
  authDomain: "qrcode-sam.firebaseapp.com",
  databaseURL: "https://qrcode-sam-default-rtdb.firebaseio.com",
  projectId: "qrcode-sam",
  storageBucket: "qrcode-sam.appspot.com",
  messagingSenderId: "778655685266",
  appId: "1:778655685266:web:e1659e7812b531ec11a44b",
  measurementId: "G-83GQBEE0PH",
};
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

database
  .ref("Products/")
  .once("value")
  .then(function (snapshot) {
    var name = snapshot.val().product_name;
    var category = snapshot.val().product_category;
    var desc = snapshot.val().product_desc;
    var price = snapshot.val().product_price;

    
       document.getElementById("name").innerHTML = name;
       document.getElementById("category").innerHTML = category;
       document.getElementById("description").innerHTML = desc;
       document.getElementById("price").innerHTML = price;
  });
*/
var firebaseConfig = {
  apiKey: "AIzaSyAqhMOuHEhA6CjxmYL9STf8_xhXSj3RIak",
  authDomain: "qrcode-sam.firebaseapp.com",
  databaseURL: "https://qrcode-sam-default-rtdb.firebaseio.com",
  projectId: "qrcode-sam",
  storageBucket: "qrcode-sam.appspot.com",
  messagingSenderId: "778655685266",
  appId: "1:778655685266:web:e1659e7812b531ec11a44b",
  measurementId: "G-83GQBEE0PH",
};
firebase.initializeApp(firebaseConfig);
database = firebase.database().ref("Products");

async function getdata() {
  database.on("value", gotData);
}
function gotData(data) {
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++) {
    let data = keys[i];
     var ul = document.getElementById("list");
     var header = document.createElement("h2");
       var _name = document.createElement("li");
       var _category = document.createElement("li");
       var _desc = document.createElement("li");
       var _price = document.createElement("li");
    _name.innerHTML = "Name: " + info[data].product_name;
    _category.innerHTML = "Category: " + info[data].product_category;
    _desc.innerHTML = "Description:" + info[data].product_desc;
    _price.innerHTML = "Price:" + info[data].product_price;

     ul.appendChild(header);
     ul.appendChild(_name);
     ul.appendChild(_category);
     ul.appendChild(_desc);
     ul.appendChild(_price);
    //console.log(info[data]);
  }
}
getdata();
/* var stdNo= 0;

 function addItemsToList(name,category,desc,price){
   var ul = document.getElementById('list');
   var header = document.createElement('h2');
   var _name =document.createElement('li');
   var _category = document.createElement('li');
   var _desc = document.createElement('li');
   var _price = document.createElement('li');


   header.innerHTML = 'Product details:' +(++stdNo);

   _name.innerHTML = 'Name: '+name;
   _category.innerHTML = 'Category: '+category;
   _desc.innerHTML = 'Description:' +desc;
   _price.innerHTML = 'Price:' +price;

   ul.appendChild(header);
   ul.appendChild(_name);
   ul.appendChild(_category);
   ul.appendChild(_desc);
   ul.appendChild(_price);

 }

 function FetchAllData(){
   firebase.database.ref('Products').once('value', function(snapshot){
      snapshot.forEach(
        function(ChildSnapshot){
          let name = ChildSnapshot.val().product_name;
          let category = ChildSnapshot.val().product_category;
          let desc = ChildSnapshot.val().product_desc;
          let price = ChildSnapshot.val().product_price;
          addItemsToList(name,category,desc,price);
        }
      );
   });
 }
 window.onload(FetchAllData());
 */

//  then(function (snapshot) {
//    console.log(snapshot);
//    //here we will get data
//    //enter your field name
//    var name = snapshot.val().product_name;
//    var category = snapshot.val().product_category;
//    var desc = snapshot.val().product_desc;
//   var price = snapshot.val().product_price;

//    //now we have data in variables
//    //now show them in our html

//    document.getElementById("name").innerHTML = name ;
//    document.getElementById("category").innerHTML = category;
//    document.getElementById("description").innerHTML = desc;
//    document.getElementById("price").innerHTML = price;
//  });

