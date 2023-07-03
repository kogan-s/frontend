const addDiv = function() {
  $("body").append("<div class=box></div>")
};

$("button").on("click", function() {
  addDiv()
});

$(".box").on("click", function() {
  alert("hi")
});