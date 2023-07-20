
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate)
    renderApts(relevantApts)
})





// Handlebars helper function to format price as currency
Handlebars.registerHelper("formatPrice", function (price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
});




const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.

  // Get the Handlebars template
  const source = $("#apt-template").html();

  // Compile the template
  const template = Handlebars.compile(source);

  // Generate HTML using the template and data
  const html = template({ apartments });

  // Append the HTML to the results element
  $("#results").append(html);
};

renderApts(apartments) //renders apartments when page loads