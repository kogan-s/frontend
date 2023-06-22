const SongsManager = function () {
  const songs = {};

  const addSong = function (songName, songURL) {
    const videoId = getVideoIdFromURL(songURL);
    songs[songName] = videoId;
  };

  const getSong = function (songName) {
    const videoId = songs[songName];
    if (videoId) {
      const fullURL = `https://www.youtube.com/watch?v=${videoId}`;
      console.log(fullURL);
    } else {
      console.log(`No song found with the name '${songName}'.`);
    }
  };

  const getVideoIdFromURL = function (songURL) {
    const url = new URL(songURL);
    const videoId = url.searchParams.get("v");
      console.log(`Extracted: '${videoId}'.`);
    return videoId;
  };

  return {
    addSong,
    getSong,
  };
};

const songsManager = SongsManager();
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ");
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U");
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8");

songsManager.getSong("sax"); // Output: https://www.youtube.com/watch?v=3JZ4pnNtyxQ
