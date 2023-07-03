  var newDiv1 = $('<div>').text('New Div1').addClass('box');
  var newDiv2 = $('<div>').text('New Div2').addClass('box');

  $('body').append(newDiv1);
  $('body').append(newDiv2);



$(".box").hover(function(){
    $(this).css("background-color", "#8e44ad")
})

$(".box").mouseout(function(){
    $(this).css("background-color", "red")
})


