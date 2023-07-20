
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr&limit=5");
xhr.done(function(data) { console.log("success got data", data); });

xhr.done(function(response) {
  var firstGif = response.data[0];
  var embedUrl = firstGif.embed_url;

  var iframe = document.createElement('iframe');
  iframe.src = embedUrl;
  iframe.width = '480';
  iframe.height = '270';

  document.body.appendChild(iframe);
});




