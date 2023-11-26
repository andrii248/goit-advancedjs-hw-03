import { fetchBreeds, fetchCatByBreed } from './js/cat-api';
import {
  showLoader,
  hideLoader,
  showSelect,
  showCatInfo,
  hideCatInfo,
} from './js/service';
import SlimSelect from 'slim-select';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const elements = {
  select: document.querySelector('select.breed-select'),
  catInfo: document.querySelector('div.cat-info'),
  loader: document.querySelector('p.loader'),
};

const slimSelect = new SlimSelect({
  select: elements.select,
  settings: {
    placeholderText: 'Search breeds',
  },
});

async function loadPage() {
  showLoader();

  try {
    await fetchBreeds().then(data => {
      elements.select.insertAdjacentHTML('afterbegin', createOptions(data));
    });

    elements.select.addEventListener('change', handleSelect);
  } catch (err) {
    iziToast.error({
      color: 'red',
      title: 'Error',
      message: '😮 Oops! Something went wrong! Try reloading the page!',
    });
  } finally {
    hideLoader();
    showSelect();
  }
}

loadPage();

function createOptions(arr) {
  const data = arr.map(({ id, name }) => ({ text: name, value: id }));
  slimSelect.setData([{ placeholder: true, text: '' }, ...data]);
}

async function handleSelect() {
  const selectedValue = elements.select.value;
  showLoader();
  hideCatInfo();
  try {
    const data = await fetchCatByBreed(selectedValue);
    elements.catInfo.innerHTML = createCatCard(data);
  } catch (err) {
    iziToast.error({
      color: 'red',
      title: 'Error',
      message: '😮 Oops! Something went wrong! Please, try searching again!',
    });
  } finally {
    hideLoader();
    showCatInfo();
  }
}

function createCatCard(data) {
  const { name, description, temperament } = data[0].breeds[0];
  const catImg = data[0].url;

  return `
      <img class="cat-img" src="${catImg}" alt="${name}"/>
      <div class="cat-breed-data">
        <h2>${name}</h2>
        <p>${description}</p>
        <h3>Temperament: </h3>
        <p>${temperament}</p>
      </div>`;
}
