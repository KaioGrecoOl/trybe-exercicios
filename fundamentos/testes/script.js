const CLIENT_ID = 'f8454628936147b4bd67256a78a06022';
const CLIENT_SECRET = 'a0e13d5b44494b88875db15629ff450d';
let token;

// HELPER 

const getElementOrClosest = (sectionClass, target) =>
  target.classList.contains(sectionClass)
    ? target 
    : target.closest(sectionClass);
  // if (target.classList.constins(sectionClass)) {
  //   return target;
  // }
  // return target.closest(sectionClass);

const clearSelectedItem = (containerSelector) => {
  const element = document.querySelector(`${containerSelector} .item-selected`);
  if (element){ 
    element.classList.remove('item-selected')
  }
};

const clearPlaylists = () => {
  const element = document.querySelector('.playlist-cards');
  element.innerHTML = '';
}

const clearMusics = () => {
  const element = document.querySelector('.tracks-cards');
  element.innerHTML = '';
}

// HANDLER

const handleGenreClick = async ({ target }) => {
  const genreSection = getElementOrClosest('.genre', target);
  const id = genreSection.id;

  clearSelectedItem('.genre-cards');
  genreSection.classList.add('item-selected')

  const playList = await getPlaylists(token, id);
  // console.log(playList);
  clearPlaylists();
  renderPlaylists(playList)

};

const handlePlaylistCardClick = async ({ target }) => {
  const playlistSection = getElementOrClosest('.playlist', target);
  const id = playlistSection.id;

  clearSelectedItem('.playlist-cards');
  playlistSection.classList.add('item-selected');

  const musics = await getMusics(token, id);
  clearMusics();
  renderMusics(musics);
};

const handleTrackCardClick = async ({ target }) => {
  const trackSection = getElementOrClosest('.track', target);
  const id = trackSection.id;

  clearSelectedItem('.tracks-cards');
  trackSection.classList.add('item-selected');

  // const player = document.querySelector('#player');
  // if (player) {
  //   player.querySelector('source').src = trackSection.value;
  //   player.load();
  // } else {
  //   createPlayer(trackSection.value);
  // }

  // document.querySelector('#playing-music-name').innerHTML = target.innerText;

}

// REQUEST

const getToken = async () => {
  const requestInfo = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET),
    },
    body: 'grant_type=client_credentials',
  };

  const response = await fetch('https://accounts.spotify.com/api/token', requestInfo);
  const data = await response.json();
  return data.access_token
};

const musicGenres = async (token) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const url = 'https://api.spotify.com/v1/browse/categories?locale=pt-br';
  const response = await fetch( url, requestInfo)
  const data = await response.json();
  return data.categories.items;

}

const getPlaylists = async (token, genreId) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const url = `https://api.spotify.com/v1/browse/categories/${genreId}/playlists`;
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  return data.playlists.items;
};

const getMusics = async (token, playlistId) => {
  const requestInfo = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    }
  };

  const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
  // console.log(url);
  const response = await fetch(url, requestInfo);
  const data = await response.json();
  // console.log(data);
  return data.items;
}


// RENDERS

const renderGenres = (genres) => {
  const genresCards = document.querySelector('.genre-cards');

  genres.forEach((genre) => {
    const section = document.createElement('section');
    section.className = 'genre';
    section.id = genre.id;

    const paragraph = document.createElement('p');
    paragraph.className = 'genre-title';
    paragraph.innerHTML = genre.name;

    const img = document.createElement('img');
    img.className = 'genre-image';
    img.src = genre.icons[0].url;

    section.appendChild(img);
    section.appendChild(paragraph);
    section.addEventListener('click', handleGenreClick);

    genresCards.appendChild(section);
  });
};

const renderPlaylists = (playlists) => {
  const playlistsCards = document.querySelector('.playlist-cards');

  playlists.forEach((playlist) => {
    const section = document.createElement('section');
    section.className = 'playlist text-card';
    section.id = playlist.id;

    const paragraph = document.createElement('p');
    paragraph.className = 'playlist-title';
    paragraph.innerHTML = playlist.name;

    section.appendChild(paragraph);
    section.addEventListener('click', handlePlaylistCardClick);

    playlistsCards.appendChild(section);
  });
};

const renderMusics = (tracks) => {
  const tracksCards = document.querySelector('.tracks-cards');

  tracks.forEach((track) => {
    const section = document.createElement('section');
    section.className = 'track text-card';
    section.id = track.id;

    const paragraph = document.createElement('p');
    paragraph.className = 'track-title';
    paragraph.innerHTML = track.track.name;

    section.appendChild(paragraph);
    section.addEventListener('click', handleTrackCardClick);

    tracksCards.appendChild(section);
  });
};

window.onload = async () => {
  try {
    token = await getToken()
    const musicGenere = await musicGenres(token);
    renderGenres(musicGenere)
  } catch (error) {
    console.log(error);
  }
}
