$(document).ready(function() {
    $('.start').on('click', function(){
      $(".box").velocity({
        left: "600px",
      }, {
        duration: 500,
      });
    });
    $('.reset').on('click', function(){
      $(".box").velocity({
        left: "0",
      }, {
        duration: 500,
        easing: "linear"
      });
    })
  });
  
  
  Resources