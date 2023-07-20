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
getRandomWord()
  .then((word) => {
    console.log('Random Word:', word);
    return getSynonyms(word);
  })
  .then((synonyms) => {
    console.log('Synonyms:', synonyms);
    return getSentiment(synonyms[0]);
  })
  .then((sentiment) => {
    console.log('Sentiment:', getSentimentDescription(sentiment));
  })
  .catch((error) => {
    console.error('Error:', error);
  });
