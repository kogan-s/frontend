const fetchRandomWord = () => {
  return fetch('https://random-word-api.herokuapp.com/word')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch random word');
      }
      return response.json();
    })
    .then((data) => {
      return data[0];
    });
};

const fetchBookByTitle = (title) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${encodeURIComponent(title)}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch book by title');
      }
      return response.json();
    })
    .then((data) => {
      return data.items[0]; // Return the first book from the search results
    });
};



const fetchRandomGif = (searchQuery) => {
  const apiKey = '2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr'; 
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${encodeURIComponent(searchQuery)}`;

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch random GIF');
      }
      return response.json();
    })
    .then((data) => {
      return data.data.image_original_url;
    });
};

// Example usage:
Promise.all([fetchRandomWord(), fetchBookByTitle(), fetchRandomGif()])
  .then(([randomWord, book, gifUrl]) => {
    console.log('Random Word:', randomWord);
    console.log('Book Title:', book.volumeInfo.title);
    console.log('GIF URL:', gifUrl);

    // Display the data on the page
    const body = document.body;
    const bookTitleElement = document.createElement('h2');
    bookTitleElement.textContent = book.volumeInfo.title;
    const gifElement = document.createElement('img');
    gifElement.src = gifUrl;

    body.appendChild(bookTitleElement);
    body.appendChild(gifElement);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
