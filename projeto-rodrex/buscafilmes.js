const api_key = 'https://api.themoviedb.org/3/movie/popular?api_key=bfa52994c1d4057c319d2466a4493296';
const api_key_busca = "https://api.themoviedb.org/3/search/movie?api_key=bfa52994c1d4057c319d2466a4493296&query=";
const img_url = 'https://image.tmdb.org/t/p/w500';

const form = document.getElementById('form')
const busca = document.getElementById('busca')
const main = document.getElementById('main')

resgatarFilmes(api_key)
    async function resgatarFilmes(url) {
    const res = await fetch(url)
    const data = await res.json()
    mostrarFilmes(data.results)
    console.log(data.results);
}

function mostrarFilmes(filmes) {
    main.innerHTML = ''
    filmes.forEach((filme) => {
        const {title, poster_path, vote_average, overview} = filme
        const elementoFilmes = document.createElement('div')
        elementoFilmes.classList.add('filmes')
        elementoFilmes.innerHTML = `
        <div class='capa-filme'>
            <img src="${img_url + poster_path}" alt = "${title}" />
        </div>
        <div class='info-filme'>
            <h3>${title}</h3>
            <span class='${corNota(vote_average)}'>${vote_average}</span>
            <div class='resumo'>${overview}</div>
        </div>
        `
        main.appendChild(elementoFilmes)
    })
}

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const valorBusca = busca.value
    if(valorBusca && valorBusca !== '') {
        resgatarFilmes(api_key_busca+valorBusca)
        valorBusca =''
    }else{
        window.location.reload()
    }
})

function corNota(vote_average) {
    if(vote_average >= 8){
        return 'verde'
    } else if (vote_average >= 5){
        return 'laranja'
    }else {
        return 'vermelho'
    }
}

