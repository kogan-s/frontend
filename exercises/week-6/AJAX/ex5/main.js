$("#search-button").on("click", function() {
  var searchQuery = $("#search-input").val();
  searchGifs(searchQuery);
});


function searchGifs(query) {
  var apiKey = "2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr";
  var url = `http://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&limit=1`;



  $.get(url)
    .done(function(response) {
      var firstGif = response.data[0];
      var embedUrl = firstGif.embed_url;

      // Create and display the iframe with the first GIF
      var iframe = $("<iframe>");
      iframe.attr("src", embedUrl);
      iframe.attr("width", "480");
      iframe.attr("height", "270");

      $("#gif-container").empty().append(iframe);
    })
    .fail(function(xhr, status, error) {
      console.log("Error:", error);
    });
}

