document.addEventListener("DOMContentLoaded", () => {
  class Jukebox {
    constructor() {
      this.albums = [];
    }

    addAlbum(album) {
      this.albums.push(album);
    }

    favoriteAlbum() {
      let max = -1;
      let fav = null;
      for (let album of this.albums) {
        if (album.played > max) {
          max = album.played;
          fav = album;
        }
      }
      return fav
        ? `${fav.artist} - ${fav.title} (played ${max} times)`
        : "No albums played yet";
    }
  }

  class Album {
    constructor(artist, title) {
      this.artist = artist;
      this.title = title;
      this.played = 0;
    }

    play() {
      this.played += 1;
    }

    display() {
      return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
  }

  const jbox = new Jukebox();
  const album1 = new Album("Operation Ivy", "Energy");
  const album2 = new Album("Blink 182", "Dude Ranch");
  const album3 = new Album("New Found Glory", "Sticks and Stones");

  jbox.addAlbum(album1);
  jbox.addAlbum(album2);
  jbox.addAlbum(album3);

  // DOM elements
  const albumSelect = document.getElementById("album-select");
  const playButton = document.getElementById("play-button");
  const favoriteButton = document.getElementById("favorite-button");
  const message = document.getElementById("favoriteAlbum");

  // Populate dropdown menu with albums
  function populateDropdown() {
    for (const album of jbox.albums) {
      const option = document.createElement("option");
      option.value = jbox.albums.indexOf(album); // Store album index as value
      option.text = album.artist + " - " + album.title;
      albumSelect.appendChild(option);
    }
  }

  populateDropdown();

  // Play button click event
  playButton.addEventListener("click", () => {
    const selectedIndex = albumSelect.value;
    if (selectedIndex !== "") {
      const selectedAlbum = jbox.albums[selectedIndex];
      selectedAlbum.play();
      message.textContent = `${selectedAlbum.artist} - ${selectedAlbum.title} is playing!`;
    } else {
      message.textContent = "Please select an album first.";
    }
  });

  // Favorite button click event
  favoriteButton.addEventListener("click", () => {
    const favorite = jbox.favoriteAlbum();
    message.textContent = `Your favorite album is: ${favorite}`;
  });
});
