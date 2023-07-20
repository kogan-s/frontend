class APIManager {
  constructor() {
    this.data = {};
  }

  async loadData() {
    try {
      // Fetch data from the Random User Generator API
      const usersResponse = await fetch('https://randomuser.me/api/?results=7');
      const usersData = await usersResponse.json();

      // Fetch data from the Random Kanye Quote Generator API
      const kanyeResponse = await fetch('https://api.kanye.rest/');
      const kanyeData = await kanyeResponse.json();

      // Fetch data from the PokeAPI to get a random Pokemon
      const randomPokemonId = Math.floor(Math.random() * 1281) + 1;

      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`);
      const randomPokemon = await pokemonResponse.json();
       
      // Fetch data from the Bacon Ipsum API
     const baconResponse = await fetch('https://baconipsum.com/api/?type=meat-and-filler');
     const aboutMeText =  await baconResponse.json();
     
 
      // Update the data object with fetched data
      this.data = {
        mainUser: usersData.results[0],
        friends: usersData.results.slice(1),
        quote: kanyeData.quote,
        pokemon: randomPokemon,
        aboutMe: aboutMeText,
      };
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
}
