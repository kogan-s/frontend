const items = [
  { item: "cheese", price: 15, show: true },
  { item: "arak", price: 68, show: true },
  { item: "hummus", price: 15, show: false },
  { item: "pita", price: 5, show: true }
]

const source = $('#store-template').html();
const template = Handlebars.compile(source);

for(let item of items){
  let newHTML = template(item);
  $('.items').append(newHTML);  
}