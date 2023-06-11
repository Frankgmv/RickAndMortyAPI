const RickAndMortyEpisodes = async page =>{
    let url = `https://rickandmortyapi.com/api/episode/?page=${page}`;
    const resp = await fetch(url);
    const data = await resp.json();
    const padre = document.querySelector("#resultado");
    padre.className = "grid-container-2"

    padre.innerHTML ="";
    
    data.results.map( episode =>{
        const divChild = document.createElement("div");
        divChild.className="card-container";
        divChild.innerHTML = `
            <ul class="card-info">
                <li class="episode-name"> ${episode.name}</li>
                <li class="episode-air_date"> ${episode.air_date}</li>
                <li class="info-episode">  ${episode.episode}</li>
                <li class="episode-created">  ${episode.created}</li>
                <li class="episode-url">  ${episode.url}</li>
            </ul>
        `;
        padre.appendChild(divChild);
    })
}

RickAndMortyEpisodes(1);