    
const searchQuery = 'sea food';
  const apiKey = '2V77f8TNqLkqyjW5VdrSAf5oCoOrWhRr'; 
  const url = `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${encodeURIComponent(searchQuery)}`;

  data = fetch(url) ;
    
//.then((data) => {
  //    return data.data.image_original_url;
   // });
//};

// Example usage:
                                
 console.log('GIF URL:', data.data.image_original_url);
                
