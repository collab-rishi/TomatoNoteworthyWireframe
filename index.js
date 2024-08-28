let express = require("express");
let app = express();
let port = 3000;

// function getWelcomeMessage() {
//   return "Welcome to our Service!"
// }
// app.get("/welcome", (req, res) => {
//   res.send(getWelcomeMessage());
 
// });

// function getGreetingMessage(username) {
//   return "Hello, "+ username + "!";
// }
// app.get("/greet", (req, res) => {

//   let username = req.query.username ; 
    
//   res.send(getGreetingMessage(username));

// });

// function checkPasswordStrength(password) {
//   if (password.length >15) {
//     return "Password is strong";
//   } else {
//     return "Password is weak";
//   }
// }
// app.get("/check-password", (req, res) => {

//   let password = req.query.password ; 

//   res.send(checkPasswordStrength(password));

// });


// function getSum(num1, num2) {
//   return num1+num2 ;
// }
// app.get("/sum", (req, res) => {

//   let num1 = parseFloat(req.query.num1) ;
//   let num2 = parseFloat(req.query.num2) ;

//   res.send(getSum(num1, num2).toString());

// });


function getSum(num1, num2) {
  return num1+num2 ;
}
app.get("/username", (req, res) => {

  let num1 = parseFloat(req.query.num1) ;
  let num2 = parseFloat(req.query.num2) ;

  res.send(getSum(num1, num2).toString());

});





app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});

