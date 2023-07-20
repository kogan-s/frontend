//request the data with a GET request
$.get("https://jsonplaceholder.typicode.com/users", function(users){
  //extract the geo data of the first user

  let lat = users[0].address.geo.lat
  let long = users[0].address.geo.lng
  let phrase = users[users.length - 1].company.catchPhrase

  //log the data
  console.log(`${lat}, ${long}, ${phrase}`) //prints -37.3159, 81.1496
})                   