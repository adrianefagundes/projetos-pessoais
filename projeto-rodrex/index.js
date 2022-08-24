const api_key = 'https://api.themoviedb.org/3/movie/popular?api_key=bfa52994c1d4057c319d2466a4493296'
const img_url = 'https://image.tmdb.org/t/p/w500'

const main = document.getElementById('main');

pegarFilmes(api_key);

function pegarFilmes(url) {
    fetch(url).then(res => res.json()).then(data => {
        mostrarFilmes(data.results);
        console.log(data);
    })  
}

function mostrarFilmes(data) {
    main.innerHTML ='';

    data.forEach(filmes => {
        const {title, poster_path, vote_average, overview} = filmes;
        const elementoFilme = document.createElement('div');
        elementoFilme.classList.add('filmes');
        elementoFilme.innerHTML = `
            <div class="capa-filme">
                <img src="${img_url+poster_path}" alt="${title}">
            </div>
            <div class="info-filme">
                <h3>${title}</h3>
                <span class="${corNota(vote_average)}">${vote_average}</span>
            </div>
            <div class="resumo">
                ${overview};
            </div>
        `
        main.appendChild(elementoFilme);
    })
}

function corNota(vote_average) {
    if(vote_average >= 8){
        return 'verde'
    } else if (vote_average >= 5){
        return 'laranja'
    }else {
        return 'vermelho'
    }
}
