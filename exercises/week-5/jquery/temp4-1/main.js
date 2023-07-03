const addDiv = function() {
  $("body").append("<div class=box></div>");
  
  $(".box").on("click", function() {
    alert("hi");
  });
};

$("button").on("click", function() {
  addDiv();
});