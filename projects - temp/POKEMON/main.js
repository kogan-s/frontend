// Function to fetch data from the PokeAPI and display the Pokemon information
async function fetchAndDisplayPokemon() {
    try {
        // Get a random number between 1 and 949 (total number of Pokemon available)
        const randomPokemonId = Math.floor(Math.random() * 949) + 1;

        // Fetch data from the PokeAPI for the random Pokemon
        const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Error fetching data from PokeAPI');
        }

        const data = await response.json();

        // Extract the name and picture URL of the Pokemon from the response
        const name = data.name;
        const pictureUrl = data.sprites.front_default;

        // Compile Handlebars template
        const source = document.getElementById('pokemon-template').innerHTML;
        const template = Handlebars.compile(source);

        // Render the data into the template
        const context = { name, pictureUrl };
        const html = template(context);

        // Insert the rendered HTML into the container
        const container = document.querySelector('.pokemon-container');
        container.innerHTML = html;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Attach click event listener to the "Generate" button
document.querySelector('.buttons button').addEventListener('click', fetchAndDisplayPokemon);