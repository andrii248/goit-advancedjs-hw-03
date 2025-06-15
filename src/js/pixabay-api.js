const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28802663-ddb0f5d28ea31cc45b363b962';

export function fetchImages(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const searchUrl = `${BASE_URL}?${params.toString()}`;

  return fetch(searchUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error ${response.status}`);
      }
      return response.json();
    })
    .then(data => data);
}
