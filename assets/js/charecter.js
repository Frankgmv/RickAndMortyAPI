const apiRickandMorty = async (page) => {

    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    const api = await fetch(url);
    const data = await api.json();

    const divContent = document.querySelector("#resultado");

    divContent.innerHTML = "";

    data.results.forEach(personaje => {

        const divResult = document.createElement('div')
        divResult.className="card-container";
        divResult.innerHTML = `
            <div class="card-img">
                <img src="${personaje.image}" alt="">
            </div>
            <div class="card-info">
                <h3 class="info-name"> ${personaje.name}</h3>
                <span class="info-status"> ${personaje.status}</span>
                <span class="info-species">  ${personaje.species}</span>
                <span class="info-gender">  ${personaje.gender}</span>
            </div>
        `;
        divContent.appendChild(divResult);
    })
}
apiRickandMorty(1);