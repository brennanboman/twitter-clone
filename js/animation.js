


  $('.tweet-compose').on('click', function() {
    $('#tweet-controls').css('visibility', 'visible');
    $('#char-count').css('visibility', 'visible');


  });

  var maxLength = 140;
      $('.tweet-compose').keyup(function() {
          var length = $(this).val().length;
          var length = maxLength-length;
          $('#char-count').text(length);
          if('#char-count' <= 10) {
             $('#char-count').css('color', 'red');
          } else {
            $('#char-count').css('color', '#999');
          }
      });

      $(".tweet-compose").focus(function(){
   $(this).height(50)
});

//tried to return the text box when clicking outside of text box
 /*$('#dashboard').on('click', function(){
   $('.tweet-compose').height(25)
 });*/

 $("#tweet-submit").on('click', function() {
     $(".tweet-compose").prependTo("#stream");
     $(".avatar").prependTo("#stream")
     $("#profile-summary").prependTo("#stream")
 });
