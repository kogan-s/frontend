
$('button').on('click', function() {
  let relevantInputValue = $(this).closest("div").find("span").text()
  relevantInputValue=relevantInputValue.replace("I am ", "");   
  alert(relevantInputValue);
})