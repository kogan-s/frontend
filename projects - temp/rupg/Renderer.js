class Renderer {
  renderMainUser(user) {
    // Use Handlebars template to render main user section
    const source = document.getElementById('main-user-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template(user);

    // Insert the rendered HTML into the user-container div
    document.querySelector('.user-container').innerHTML = html;
  }

  renderFriends(users) {
    // Use Handlebars template to render friends section
    const source = document.getElementById('friends-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ friends: users });

    // Insert the rendered HTML into the friends-container div
    document.querySelector('.friends-container').innerHTML = html;
  }


  renderQuote(users) {
    // Use Handlebars template to render Kanye section
    const source = document.getElementById('quote-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ quote: users });

    // Insert the rendered HTML into the friends-container div
    document.querySelector('.quote-container').innerHTML = html;
  }


 renderPokemon(pokemon) {
    // Use Handlebars template to render Pokemon section
  const source = document.getElementById('pokemon-template').innerHTML;
  const template = Handlebars.compile(source);
  const html = template(pokemon);

    // Insert the rendered HTML into the friends-container div
    document.querySelector('.pokemon-container').innerHTML = html;
  }


  renderAboutMe(text) {
    // Use Handlebars template to render About Me section
    const source = document.getElementById('about-me-template').innerHTML;
    const template = Handlebars.compile(source);
    const html = template({ text });

    // Insert the rendered HTML into the meat-container div
    document.querySelector('.meat-container').innerHTML = html;
  }
}




// Extencions

// Custom Handlebars helper to convert name to Proper Case
Handlebars.registerHelper('properCase', function (name) {
    // Convert the first letter to uppercase and the rest to lowercase
    return name.charAt(0).toUpperCase() + name.slice(1);
});