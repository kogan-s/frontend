
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

// Example usage:
fetchRandomWord()
  .then((randomWord) => {
    console.log('Random Word:', randomWord);
    return fetchBookByTitle(randomWord);
  })
  .then((book) => {
    console.log('Book Title:', book.volumeInfo.title);
    console.log('Book Authors:', book.volumeInfo.authors);
    console.log('Book Description:', book.volumeInfo.description);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
