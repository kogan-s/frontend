$("body").append(`<div class=list>${name}</div>`);

$("button").on("click", function () {
  
$("body").append(`<div class=list>* ${$("#my-input").val()}</div>`);

})

$("#list").hover(function(){
    $("#list").remove()
})


$("body").ready(function() {
  // Attach a click event listener to the rows
  $('#list').on('click', function() {
    // Remove the clicked row
    $(this).remove();
  });
});