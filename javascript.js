$(function(){
  $('.modal-show').click(function(){
    $('#signup-modal').fadeIn();
  });
  $('#modal-close').click(function(){
    $('#signup-modal').fadeOut();
  });
  
  $('form').submit(function() {
    alert('申し込みが完了しました！');
});
  

// QA
  $('.faq-list').click(function(){
    var $answer=$(this).find('.answer');
    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('.mark').removeClass('fas fa-chevron-up');
      $(this).find('.mark').addClass('fas fa-chevron-down');
    }
    else{
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('.mark').removeClass('fas fa-chevron-down');
      $(this).find('.mark').addClass('fas fa-chevron-up');
    }
  });

});
