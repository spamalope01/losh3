$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 50) {
    $('.logo').hide();
    $('.darkNavLogo').show();
    $('.stickyNav').addClass('darkNav');
  } else {
    $('.stickyNav').removeClass('darkNav');
    $('.darkNavLogo').hide();
    $('.logo').show();

  }
});



(function(module){
  // var nodemailer = require('nodemailer');
  let mail = {};

  mail.$from = null;
  mail.$phone = null;
  mail.$email = null;
  mail.$message = null;

  mail.getForm = function(){
    $('.contactForm').off().on('click', '.sendMail', function(){
      $(location).attr('href', 'http://localhost:9000/send');
      // e.preventDefault();
      mail.$from = $('.contactForm input[name=sender]').val();
      mail.$email = $('.contactForm input[name=email]').val();
      mail.$phone = $('.contactForm input[name=phone]').val();
      mail.$message = $('.contactForm textarea[name=message]').val();
      $.get("http://localhost:9000/send", {
        from: mail.$from,
        phone: mail.$phone,
        email: mail.$email,
        text: mail.$message
      },
      function(data){
        if(data == "sent"){
          $('.contactForm').hide();
          $('.contactInvite').hide();
          $('#sentMessage').empty().html(
            'Your email has been sent.  Thank you!  We will be in touch soon.'
          );
        } else{
          console.log('did not send', err);
        }
      });
    });
  };



  // mail.smtpTransport = nodemailer.createTransport({
  //   host: "smtp.gmail.com",
  //   auth: {
  //     user: "l2workquery@gmail.com",
  //     pass: process.env.PASSWORD
  //   }
  // });
  //
  // app.get('/send', function(req, res) {
  //   var mailOptions={
  //     to : "Brian@L2Engineers.com",
  //     subject: "Inquiry about work.",
  //     from: req.query.email,
  //     phone: req.query.phone,
  //     email: req.query.email,
  //     text : "You have received a project request. \n \n Contact Name: " + req.query.from + ". \n \n Contact email: " + req.query.email + ". \n \n Contact phone: " + req.query.phone + " \n \n Message: " + req.query.text
  //   };
  //   var mailCopy = {
  //     to: req.query.email,
  //     from: "Brian@L2Engineers.com",
  //     text: "You submitted the following message to:  \n \n Brian@L2Engineers.com.  \n \n Your Message: \n \n " + req.query.text
  //   };
  //   smtpTransport.sendMail(mailOptions, function(error, response){
  //     if(error){
  //       res.end("error", error);
  //     }else{
  //       res.end("sent");
  //     }
  //   });
  //   smtpTransport.sendMail(mailCopy, function(error, response){
  //     console.log('mailCopy', mailCopy);
  //     if(error){
  //       res.end("error");
  //     }else{
  //       res.end("sent");
  //     }
  //   })
  // });



$(document).ready(function() {
  $('.darkNavLogo').hide();
    mail.getForm();
    // mail.showContact();
    // mail.hideContact();
    $('.slideout').hide();
});






  module.mail = mail;
})(window);
