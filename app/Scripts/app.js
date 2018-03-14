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
      $.get("http://l2engineers.com/send", {
        from: mail.$from,
        phone: mail.$phone,
        email: mail.$email,
        text: mail.$message
      }, function(data){
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



  mail.showContact = (function () {
        $(".slide-toggle").click(function(){
          $('.contactForm input[name=sender]').val("");
          $('.contactForm input[name=email]').val("");
          $('.contactForm input[name=phone]').val("");
          $('.contactForm textarea[name=message]').val("");
          $('#sentMessage').empty();
          $('.contactForm').show();
          $('.concactInvite').show();
            $(".box").animate({
                width: "toggle"
            });
        });
        $('.box').css('position', 'absolute');
    });


    mail.hideContact = (function () {
          $(".closeThis").click(function(){
              $(".box").animate({
                  width: "toggle"
              });
          });
      });



$(document).ready(function() {
  $('.darkNavLogo').hide();
    mail.getForm();
    mail.showContact();
    mail.hideContact();
    $('.slideout').hide();
});






  module.mail = mail;
})(window);
