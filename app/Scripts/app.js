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
            $(".box").animate({
                width: "toggle"
            });
        });
    });
    // cache the sliding object in a var
    // var slideout = $('.slideout');
    // "click-me" is what is in your html not "clickme"
    // $(".contactBtn").toggle(function () {
    //     // use cached object instead of searching
    //     slideout.animate({
    //         left: '0px'
    //     }, {
    //         queue: false,
    //         duration: 500
    //     });
    // }, function () {
    //     // use cached object instead of searching
    //     slideout.animate({
    //         left: '-300px'
    //     }, {
    //         queue: false,
    //         duration: 500
    //     });
    // });
// });























$(document).ready(function() {
    mail.getForm();
    mail.showContact();
    // $('.slideout').hide();
    // mail.sendForm();
});





  module.mail = mail;
})(window);
