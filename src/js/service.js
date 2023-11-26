const elements = {
  select: document.querySelector('select.breed-select'),
  catInfo: document.querySelector('div.cat-info'),
  loader: document.querySelector('p.loader'),
};

export function showLoader() {
  elements.loader.classList.remove('hidden');
  console.log('Show');
}

export function hideLoader() {
  elements.loader.classList.add('hidden');
  console.log('Hide');
}

export function showSelect() {
  elements.select.classList.remove('hidden');
}

export function showCatInfo() {
  elements.catInfo.classList.remove('hidden');
}

export function hideCatInfo() {
  elements.catInfo.classList.add('hidden');
}
