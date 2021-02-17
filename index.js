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
*/
function setup(){
const config = {
  apiKey: "AIzaSyAqhMOuHEhA6CjxmYL9STf8_xhXSj3RIak",
  authDomain: "qrcode-sam.firebaseapp.com",
  databaseURL: "https://qrcode-sam-default-rtdb.firebaseio.com",
  projectId: "qrcode-sam",
  storageBucket: "qrcode-sam.appspot.com",
  messagingSenderId: "778655685266",
  appId: "1:778655685266:web:e1659e7812b531ec11a44b",
  measurementId: "G-83GQBEE0PH",
};
  firebase.initializeApp(config);
  database = firebase.database();

}
