$(window).scroll(function() {
  console.log('in the scroll');
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    console.log('running scroll');
    $('.globalNav').addClass('darkNav');
  } else {
    $('.globalNav').removeClass('darkNav');
  }
});
