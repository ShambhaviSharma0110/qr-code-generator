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
       document.getElementById("desc").innerHTML = desc;
       document.getElementById("price").innerHTML = price;
     });
 }