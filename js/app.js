






$(function () {


  //  sticky position on the navbar

  let stickyNavTop = $(".navbar").offset().top;

  function stickyNav() {
    let scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $(".navbar").addClass("sticky");
      $(".banner").css('margin-top', '75px');
    } else {
      $(".navbar").removeClass("sticky");
      $(".banner").css('margin-top', '0px');

    }
  }

  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });


  //   $('.navbar-toggler').on('click', function(e) {
  //   console.log('Toggler clicked!'); // Debug log
  // });

});







