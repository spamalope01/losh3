(function(module){
  let mail = {};

  mail.$$from = null;
  mail.$phone = null;
  mail.$email = null;
  mail.$message = null;



  mail.getForm = function(){
    $('.contactForm').off().on('click', '.sendMail', function(e){
      e.preventDefault();
      mail.$from = $('.contactForm input[name=sender]').val();
      mail.$email = $('.contactForm input[name=email]').val();
      mail.$phone = $('.contactForm input[name=phone]').val();
      mail.$message = $('.contactForm textarea[name=message]').val();
      console.log('from', mail.$from);
      console.log('phone', mail.$phone);
      console.log('email', mail.$email);
      console.log('message', mail.$message);
      console.log('got the form');
      $.get("http://localhost:9000/send", {
        from: mail.$from,
        phone: mail.$phone,
        email: mail.$email,
        text: mail.$message
      }, function(data){
        console.log('in the get function');
        if(data == "sent"){
          $('#sentMessage').empty().html(
            'Your email has been sent.  Thank you!  We will be in touch soon.'
          );
        }
      });
    });
  };



  mail.showContact = (function () {
        $(".slide-toggle").click(function(){
          // $('.box').css('position', 'absolute');
            $(".box").animate({
                width: "toggle"
            });
        });
    });
























$(document).ready(function() {
    mail.getForm();
    mail.showContact();
    $('.slideout').hide();
    // mail.sendForm();
});





  module.mail = mail;
})(window);
