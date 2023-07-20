const animals = ["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]

const languages = ["French", "Spanish", "Togolese", "Javascript", "Uruk"]


const renderAnimals = function(){
  const source = $('#animals-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ animals });
  $("#animalsList").append(newHTML);  
}

const renderLanguages = function(){
  const source = $('#languages-template').html();
  const template = Handlebars.compile(source);
  let newHTML = template({ languages });
  $("#languagesList").append(newHTML);  
}

renderAnimals()
renderLanguages()

