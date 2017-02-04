


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

//doesn't work
/* $("#tweet-submit").on('click', function() {
     $(".tweet-compose").prependTo("#stream");
     $(".avatar").prependTo("#stream")
     $("#profile-summary").prependTo("#stream")
 });*/


//below lets me submit tweet
 $('#tweet-submit').on('click', function() {
    var tweetText = $('.tweet-compose').val();
    var newBrenTweet = $('.tweet').first().clone();

   newBrenTweet.find('.avatar').attr('src', 'https://pbs.twimg.com/profile_images/1610424916/image.jpg');
    newBrenTweet.find('.fullname').html('Brennan Boman');
    newBrenTweet.find('.username').html('@bboman');
    newBrenTweet.find('.tweet-text').html(tweetText);
    newBrenTweet.find('.num-retweets').html(0);
    newBrenTweet.find('.num-favorites').html(0);
    newBrenTweet.find('tweet-compose').html('reply to @btagge');
    newBrenTweet.find('.users-interact').html('<div></div>');

    $('#stream').prepend(newBrenTweet);

   $('#new-tweetBox').val('');
    $('#char-count').html(lengthAllowed);
    $('#tweet-controls').hide();
    $('#new-tweetBox').css('height', '30px');

   $('.tweet').on('mouseover',function() {
        $(this).find('.tweet-actions').show();
    });

   $('.tweet').on('mouseout', function() {
        $(this).find('.tweet-actions').hide();
    });

   $('.tweet').on('click', function() {
        $(this).find('.stats').toggle('fast');
    });
  });

//trying to make tweet-actions only show when hovering over
/*$('.tweet-text').hover(function(){
  $('.tweet-actions').css('visibility', 'visible')
});  didn't work */
//will try to do with css *update -- got it with CSS
