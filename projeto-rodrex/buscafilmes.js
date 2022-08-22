const API_KEY = 'api_key=bfa52994c1d4057c319d2466a4493296';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

filmes(API_URL);

function filmes(url) {

    fetch(url).then(res => res.json()).then(data => {
        mostrarFilmes(data.results);
    })
}

