var box = $('.box');
  var colorButtons = $('#colors span');

  for (var colorButton of colorButtons) {
    var $colorButton = $(colorButton);
    var color = $colorButton.data('color');
    $colorButton.addClass('picker').css('background-color', color);

    $colorButton.click(function() {
      var clickedColor = $(this).data('color');
      box.css('background-color', clickedColor);
    });
  }