const api_base = 'https://pokeapi.co/api/v2/pokemon/';

document.querySelector('#search-button').addEventListener('click', getPokemon);

function getPokemon(e) {
    const name = document.querySelector('#search').value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => {
            document.querySelector('.pokemon-box').innerHTML = `
            <div>
                <img 
                src="${data.sprites.other['official-artwork'].front_default}" 
                alt="${data.name}">
            </div>
            <div class="pokemon-info">
                <h1>${data.name}</h1>
                <p>${data.types['0'].type.name}<p/>
            </div>
            `;
        })
        .catch((err) => {
            console.log('Pokemon not found.', err);
        });

        e.preventDefault();
}

