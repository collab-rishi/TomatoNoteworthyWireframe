let express = require("express");
let app = express();
let port = 3000;

// app.get("/check-number", (req, res) => {

//   let number = parseFloat(req.query.number) ;
//   let check ;

//   if ( number >= 0){
//     check = "positive";
//   } else {
//     check = "negative";
//   }
//   res.send("Number is " + check);
  
// });



// app.get("/check-even-odd", (req, res) => {

//   let number = parseInt(req.query.number) ;
//   let check ;

//   if ( number %2 == 0){
//     check = "even";
//   } else {
//     check = "odd";
//   }
//   res.send("Number is " + check);

// });


// app.get("/check-login", (req, res) => {

//   let isLoggedIn = Boolean(req.query.isLoggedIn);
//   let check;
  

//   if (isLoggedIn){
//     check = "User is logged in";
//   } else {
//     check = "User is logged out";
//   }
//   res.send(check);

// });


// app.get("/check-discount", (req, res) => {

//   let age = parseInt(req.query.age);
//   let check ;

//   if ( age > 65){
//     check = "User is eligible for a discount";
//   } else {
//     check = "User is not eligible for a discount";
//   }
//   res.send(check);

// });










app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});

