const CLIENT_ID = 'f8454628936147b4bd67256a78a06022';
const CLIENT_SECRET = 'a0e13d5b44494b88875db15629ff450d';
let token;

// HELPER 

const getElementOrClosest = (sectionClass, target) =>
  target.classList.contains(sectionClass)
    ? target 
    : target.closest(sectionClass)
  // if (target.classList.constins(sectionClass)) {
  //   return target;
  // }
  // return target.closest(sectionClass);
;

// HANDLER

const handleGenreClick = ({ target }) => {
  const genreSection = getElementOrClosest('.genre', target);
  const id = genreSection.id;
  genreSection.classList.add('item-selected')
};

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

window.onload = async () => {
  try {
    token = await getToken()
    const musicGenere = await musicGenres(token);
    renderGenres(musicGenere)
  } catch (error) {
    console.log(error);
  }
}
