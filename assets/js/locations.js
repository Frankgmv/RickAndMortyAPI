const RickAndMortyLocations = async page =>{
    const url =`https://rickandmortyapi.com/api/location/?page=${page}`;
    
    const resp = await fetch(url);
    const data = await resp.json();

    const container_content = document.querySelector("#resultado");
    container_content.className = "grid-container-3";
    console.log(container_content);
    container_content.innerHTML="";

    data.results.map(location =>{
        const divElement = document.createElement("div");
        divElement.className += "card-container"

        divElement.innerHTML= `
        <ul class="card-info card-location">
            <li class="location-name"> ${location.name}</li>
            <li class="location-type"> ${location.type}</li>
            <li class="location-dimension">  ${location.dimension}</li>
            <li class="location-created">  ${location.created}</li>
            <li class="location-url">  ${location.url}</li>
        </ul>
        `;
        container_content.appendChild(divElement);
    })
}
RickAndMortyLocations(1)