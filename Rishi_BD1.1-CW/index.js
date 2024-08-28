let express = require("express");
let app = express();
let port = 3000;

 //Q1
app.get("/shout", (req, res) => {
  let name = req.query.name;
  let upperCaseName = name.toUpperCase();
  console.log("helloo");
  res.send(upperCaseName);

});


 //Q2
app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + " " + lastName ;
  console.log("helloo");
  res.send(fullName);

});


// //Q3
app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let formattedDate = month + ", " + year;
  console.log("helloo");
  res.send(formattedDate);

});


// // Q4
app.get("/greet", (req, res) => {
  let name = req.query.name;
  
  let greeting = "Namaste" + ", " + name + "!";
  console.log("helloo");
  res.send(greeting);

});


// // Q5
app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;

  let address = street + ", " + city + ", " + state;
  console.log("helloo");
  res.send(address);

});


// // Q6
app.get("/email", (req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;

  let email = username + "@" + domain;
  console.log("helloo");
  res.send(email);

});


app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});

