const addMovieModel = document.getElementById('add-modal');
// const addMovieModel=document.querySelector('#add-modal');
// const addMovieModel=document.body.children[1];
const startAddMovieButton = document.querySelector('header button ');

const backdrop = document.getElementById('backdrop');

const cancelAddMovieButton = addMovieModel.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModel.querySelectorAll('input');

const movies = [];
const entryTextSection = document.getElementById('entry-text');

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const renderNewMovieElement = (title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
   <img src="${imageUrl}" alt="${title}"> 
   </div>
  <div class="movie-element__info">
   <h2>${title}</h2>
    <p> ${rating}/5 stars</p>
  </div>
  `;
  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const toggleMovieModal = () => {
  addMovieModel.classList.toggle('visible');
  toggleBackdrop();
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const clearMovieInput = () => {
  for (const userInput of userInputs) {
    userInput.value = '';
  }
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert('Please enter valid values (rating between 1 and 5). ');
    return;
  }
  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
  renderNewMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
startAddMovieButton.addEventListener('click', toggleMovieModal);
confirmAddMovieButton.addEventListener('click', addMovieHandler);
