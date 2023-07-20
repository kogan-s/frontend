// Create instances of the Renderer and APIManager classes
const renderer = new Renderer();
const apiManager = new APIManager();

// Define loadData and renderData functions
async function loadDataAndRender() {
// Load data from APIs  
await apiManager.loadData();

  const data = apiManager.data;
  renderer.renderMainUser(data.mainUser);
  renderer.renderFriends(data.friends);
  renderer.renderQuote(data.quote);
  renderer.renderPokemon(data.pokemon);  
  renderer.renderAboutMe(data.aboutMe);
}




 // Save the current user-related data to local storage
function saveUserPage() {
  const data = apiManager.data;
  const userData = {
    mainUser: data.mainUser,
    friends: data.friends,
    quote: data.quote,
    pokemon: data.pokemon,
    aboutMe: data.aboutMe,
  };
  localStorage.setItem('userData', JSON.stringify(userData));
  alert('User page saved!');
}


// Load the saved user-related data from local storage and render it on the page
function loadUserPage() {
  const savedUserData = localStorage.getItem('userData');
  if (savedUserData) {
    const userData = JSON.parse(savedUserData);
    renderer.renderMainUser(userData.mainUser);
    renderer.renderFriends(userData.friends);
    renderer.renderQuote(userData.quote);
    renderer.renderPokemon(userData.pokemon);  
    renderer.renderAboutMe(userData.aboutMe);
    alert('User page loaded!');
  } else {
    alert('No saved user page data found.');
  }
}



// Attach click event listener to the "Generate" button
document.querySelector('.generate-button').addEventListener('click', loadDataAndRender);
// Attach click event listener to the "Save User Page" button
document.querySelector('.save-button').addEventListener('click', saveUserPage);
// Attach click event listener to the "Load User Page" button
document.querySelector('.load-button').addEventListener('click', loadUserPage);
