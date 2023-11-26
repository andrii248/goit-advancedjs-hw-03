import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_bO23hWJCGT0waNKtzCwMgl8Tys68lTcbKfmgL42B6ai6pWei5Kw9eSwZI0tDgVzX';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(resp => resp.data);
}

export async function fetchCatByBreed(breedId) {
  return await axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(resp => resp.data);
}
