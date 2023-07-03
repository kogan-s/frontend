var cartNotes = `<div class="cart-item">Notes\n
* Do not change any of the HTML/CSS\n
* Only items that are in stock (based off the data attribute) should be clickable\n
* You should add the clicked item to the #cart
</div>`;


$('#cart').append(cartNotes);

/*$(document).ready(function() {*/
  // Add click event handler to items
  $('#items .item[data-instock="true"]').click(function() {
    var itemName = $(this).text();
    var cartItem = `<div class="cart-item">${itemName}</div>`;
    $('#cart').append(cartItem);
  });
/*}); */
                              
