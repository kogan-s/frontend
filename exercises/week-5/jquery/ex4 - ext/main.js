$(document).ready(function() {
  $('#cart').on('click', '.cart-item', function() {
    $(this).remove();
  });

  $('#items .item[data-instock="true"]').click(function() {
    var itemName = $(this).text();
    var cartItem = $('#cart .cart-item').filter(function() {
      return $(this).text().startsWith(itemName);
    });

    if (cartItem.length > 0) {
      var quantityText = cartItem.text().match(/\d+/);
      var quantity = parseInt(quantityText) || 1;
      cartItem.text(itemName + ' x' + (quantity + 1));
    } else {
      var newCartItem = $('<div>').addClass('cart-item').text(itemName);
      $('#cart').append(newCartItem);
    }
  });
});
