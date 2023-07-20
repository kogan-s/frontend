const getRandomWord = function () {
  return new Promise((resolve) => {
    let words = [
      'Bonanza', 'Elusive', 'Hindrance', 'Astute', 'Polaroid', 'Phonic', 'Yonder'
    ];
    setTimeout(() => {
      resolve(words[Math.floor(Math.random() * words.length)]);
    }, 1000);
  });
};

const getSynonyms = function (word) {
  return new Promise((resolve) => {
    let thesaurus = {
      'Absolute': ['Definitive', 'Certain', 'Sure', 'Unequivocal'],
      'Astute': ['Sharp', 'Poignant', 'Clever'],
      'Azure': ['Blue', 'Cyan', 'Sky-blue'],
      'Bright': ['Luminous', 'Brilliant'],
      'Bonanza': ['Plethora', 'Smorgasboard', 'Copious', 'Plenty'],
      'Elusive': ['Slick', 'Slippery', 'Ethereal', 'Loose'],
      'Erode': ['Destroy', 'Wear out', 'Tarnish'],
      'Hindrance': ['Bother', 'Disturbance', 'Problematic'],
      'Phonic': ['Soundful'],
      'Ploy': ['Plan', 'Ruse'],
      'Polaroid': ['Photograph'],
      'Yap': ['Bark', 'Blab', 'Chatter'],
      'Yonder': ['There', 'Away', 'Far', 'Afar']
    };

    setTimeout(() => {
      resolve(thesaurus[word]);
    }, 1000);
  });
};

const getSentiment = function (word) {
  return new Promise((resolve) => {
    let wordSentiment = {
      'Definitive': 1,
      'Sharp': 1,
      'Blue': 0,
      'Luminous': 1,
      'Plethora': 1,
      'Slick': -1,
      'Destroy': -1,
      'Bother': -1,
      'Soundful': 0,
      'Plan': 0,
      'Photograph': 0,
      'Bark': -1,
      'There': -1
    };

    setTimeout(() => {
      resolve(wordSentiment[word]);
    }, 1000);
  });
};

const getSentimentDescription = function (sentiment) {
  return sentiment === 1 ? 'Positive' : sentiment === -1 ? 'Negative' : 'Neutral';
};

// Example usage:



let word = null

getRandomWord()
    .then((wordParam) => {
        word = wordParam
        let synonymsPromise = getSynonyms(word)
        let sentimentPromise = getSentiment(word)
        return Promise.all([synonymsPromise, sentimentPromise])
    })
    .then((promiseResults) => {
        // The first item in the array is our synonyms array, and the second is the sentiment for the word we got.
        let [synonyms, sentiment] = promiseResults
        const sentimentDescription = getSentimentDescription(sentiment)
        console.log(`The word ${word} has a ${sentimentDescription} sentiment and synonyms ${synonyms}`)
    })
