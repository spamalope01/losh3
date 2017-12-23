$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $('.stickyNav').addClass('darkNav');
  } else {
    $('.stickyNav').removeClass('darkNav');
  }
});
