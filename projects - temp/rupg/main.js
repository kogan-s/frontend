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

// Attach click event listeners to the buttons
//document.querySelector('.buttons button:nth-child(1)').addEventListener('click', loadData);
//document.querySelector('.buttons button:nth-child(2)').addEventListener('click', renderData);

// Attach click event listener to the "Generate" button
document.querySelector('.buttons button').addEventListener('click', loadDataAndRender);