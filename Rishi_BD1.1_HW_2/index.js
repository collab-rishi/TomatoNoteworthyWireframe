let express = require("express");
let app = express();
let port = 3000;

//Q1
app.get("/custom-commit", (req, res) => {
  let type = req.query.type ;
  let message = req.query.message ;

  let out = type + ": " + message ;
  res.send(out);

  
})


//Q2
app.get("/certificate", (req, res) => {
  let firstName = req.query.firstName ;
  let lastName = req.query.lastName ;
  let courseName = req.query.courseName ;

  let award = "This certification is awarded to " + firstName + " " + lastName + " for completing the course " + courseName ;
  
  res.send(award);

})


//Q3

app.get("/autoreply", (req, res) => {
  let startMonth = req.query.startMonth ;
  let endMonth = req.query.endMonth ;


  let msg = "Dear customer, thank you for reaching out to me. Unfortunately, I'm out of office from " + startMonth + " till " + endMonth + ". Your enquiry will be resolved by another colleague."

  res.send(msg);
})



//Q4
app.get("/secureurl", (req, res) => {
  let domain = req.query.domain ;
 let out = "https://" + domain ;

  res.send(out);


})


//Q5

app.get("/sendotp", (req, res) => {
  let otpCode = req.query.otpCode ;
  


  let msg = "Your OTP for account verification is " + otpCode +". Do not share this with anyone"

  res.send(msg);


})


//Q6
app.get("/welcome", (req, res) => {
  let firstName = req.query.firstName ;
  let email = req.query.email ;

  let msg =  "Hey " + firstName +". We're excited to have you here, we'll send future notifications to your registered mail ("+ email +")"

  res.send(msg);

})


//Q7
app.get("/github-profile", (req, res) => {
  let userName = req.query.userName;
 console.log("rrrrrr");
  let  ur = "https://github.com/" + userName ;

  res.send(ur);

});



//Q8
app.get("/text-to-csv", (req, res) => {
  let id = req.query.id;
  let email = req.query.email;
  let rollNumber = req.query.rollNumber;
 console.log("rrrrrr");
  let  ur = id + ", " + email + ", " + rollNumber ;

  res.send(ur);

});






app.listen(port, () => {
  console.log("Server is running on http://localhost:", port);
});

