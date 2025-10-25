$(document).ready(function() {
  
  $('.page-btn').click(function() {
    var pageNumber = $(this).data('page');
    
    $('.page-btn').removeClass('clicked');
    
    $(this).addClass('clicked');
    
    $('.review-page').hide();
    
    $('#page-' + pageNumber).fadeIn(400);
  });

});
