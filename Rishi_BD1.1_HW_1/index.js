let express = require("express");
let app = express();
let port = 3000;

//Q1
app.get("/whisper", (req, res) => {
  let name = req.query.name.toLowerCase() ;
  res.send(name); 

}) 

//Q2
app.get("/full-product-name", (req, res) => {
  let companyName = req.query.companyName ;
   let productName = req.query.productName ;
  let fullProductname = companyName + " " + productName ;
  console.log("hellooo")
  res.send(fullProductname); 
  
})

//Q3
app.get("/date", (req, res) => {
  let month = req.query.month ;
   let year = req.query.year ;
  let formattedDate = month + "/" + year ;
  console.log("hellooo");
  res.send(formattedDate); 

})

//Q4
app.get("/greet", (req, res) => {
  let city = req.query.city ;
   
  let greet = "You live in " + city ;
  console.log("hellooo");
  res.send(greet); 

})


//Q5
app.get("/capital", (req, res) => {
  let capital = req.query.capital ;
   let country = req.query.country ;
  let countryCapital = capital + " is the capital of " + country + "." ;
  console.log("hellooo")
  res.send(countryCapital); 

})

//Q6
app.get("/email", (req, res) => {
  
  let firstName = req.query.firstName ;
   let lastName = req.query.lastName ;
  let domain = req.query.domain ;
  let email = firstName + "." + lastName + "@"+domain ;
  console.log("hellooo")
  res.send(email); 

})








app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});

