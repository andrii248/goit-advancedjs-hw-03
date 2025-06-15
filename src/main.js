import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api';
import { clearGallery, renderGalley } from './js/render-functions';

const refs = {
  searchForm: document.querySelector('.js-form'),
  gallery: document.querySelector('.js-gallery'),
  loader: document.querySelector('.loader'),
};

function showLoader() {
  refs.loader.classList.remove('is-hidden');
}

function hideLoader() {
  refs.loader.classList.add('is-hidden');
}

refs.searchForm.addEventListener('submit', evt => {
  evt.preventDefault();

  const userQuery = evt.currentTarget.elements.search.value.trim();

  if (!userQuery) {
    iziToast.info({
      title: 'No query',
      message: 'Please enter your query',
      position: 'topRight',
    });
    return;
  }

  clearGallery(refs.gallery);

  showLoader();

  fetchImages(userQuery, refs.gallery)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.info({
          title: 'No results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      renderGalley(data.hits, refs.gallery);
    })
    .catch(err => {
      iziToast.error({
        title: 'Error',
        message: `${err.message}`,
        position: 'topRight',
      });
    })
    .finally(() => hideLoader());

  refs.searchForm.reset();
});
