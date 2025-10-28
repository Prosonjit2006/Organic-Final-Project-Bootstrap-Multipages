






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





   $(document).ready(function() {
      // Toggle dropdown on button click
      $('#userMenuBtn').on('click', function(e) {
        e.stopPropagation();
        $('#userMenu').toggleClass('show');
      });

      // Close dropdown when clicking outside
      $(document).on('click', function(e) {
        if (!$(e.target).closest('#userMenuBtn').length && !$(e.target).closest('#userMenu').length) {
          $('#userMenu').removeClass('show');
        }
      });

      // Close dropdown when a menu item is clicked
      $('.menu-link').on('click', function() {
        $('#userMenu').removeClass('show');
      });
    });


    // navbar-togglar part animation

    $('.navbar-toggler').on('click', function () {
    const icon = $(this).find('i')
    icon.toggleClass('fa-bars fa-xmark') // swap icons
  })
});







