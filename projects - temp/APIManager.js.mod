class APIManager {
  constructor() {
    this.data = {};
  }

  async loadData() {
    try {
      // Fetch data from the Random User Generator API
      const usersResponse = fetch('https://randomuser.me/api/?results=7');
      const usersData = usersResponse.json();
      console.log(usersData);
      // Fetch data from the Random Kanye Quote Generator API
      const kanyeResponse = fetch('https://api.kanye.rest/');
      const kanyeData = kanyeResponse.json();

      // Fetch data from the PokeAPI to get a random Pokemon
      const pokemonResponse = fetch('https://pokeapi.co/api/v2/pokemon/?limit=949');
      const pokemonData = pokemonResponse.json();
      const randomPokemon = pokemonData.results[Math.floor(Math.random() * pokemonData.results.length)];

      // Fetch data from the Bacon Ipsum API
      const baconResponse = fetch('https://baconipsum.com/api/?type=meat-and-filler');
      const baconData = baconResponse.json();
      const aboutMeText = baconData.join(' ');

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
