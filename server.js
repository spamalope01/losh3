var express = require('express');
var app = express();
var port = process.env.PORT || 9000;
var nodemailer = require('nodemailer');

// const password = require('./variables');
// let pass = password.password;

app.use(express.static(__dirname + '/app'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


var smtpTransport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  auth: {
    user: "l2workquery@gmail.com",
    pass: process.env.PASSWORD
  }
});

app.get('/send', function(req, res) {
  var mailOptions={
    to : "Brian@L2Engineers.com",
    subject: "Inquiry about work.",
    from: req.query.email,
    phone: req.query.phone,
    email: req.query.email,
    text : "You have received a project request. \n \n Contact Name: " + req.query.from + ". \n \n Contact email: " + req.query.email + ". \n \n Contact phone: " + req.query.phone + " \n \n Message: " + req.query.text
  };
  var mailCopy = {
    to: req.query.email,
    from: "Brian@L2Engineers.com",
    text: "You submitted the following message to:  \n \n Brian@L2Engineers.com.  \n \n Your Message: \n \n " + req.query.text
  };
  smtpTransport.sendMail(mailOptions, function(error, response){
    if(error){
      res.end("error", error);
    }else{
      res.end("sent");
    }
  });
  smtpTransport.sendMail(mailCopy, function(error, response){
    console.log('mailCopy', mailCopy);
    if(error){
      res.end("error");
    }else{
      res.end("sent");
    }
  })
});


app.listen(port, function(){
  console.log('Listening on port:', port);
});
