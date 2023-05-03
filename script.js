function printCards(array = []){

    console.log(array)

    let arrayOfCards = ""  

    array.forEach( (item) => {
        //indicarle que en el div va a ir concatenando las
        //tarjetas anteriores con una nueva
        let statusColor //= item.status === "Alive" ? "success" : "danger"

        if(item.status === "Alive") statusColor = "success"
        else statusColor = "danger"

        arrayOfCards += `
        <div class="card-info">
        <img src="${item.image}" alt="img" class="img-card">
      <div class="card-details">
        <h2>${item.name}</h2>
        <div class="status-container d-flex flex-row gap-2">
        <span class="status">${item.status}</span>
        <span class="status-icon text-${statusColor}"> * </span>
      </div>
      
    <div class="location-container d-flex flex-column">
        <span class="text-gray">
          Last location known:
        </span>
        <span class="location">
          ${item.location.name}
        </span>
      </div>
  
      <div class="episode-container d-flex flex-column">
        <span class="text-gray">Species:</span>
        <span class="episode">${item.species}</span>
      </div>
      </div>
      </div>
        
        `
    }) 

    document.querySelector("#printer").innerHTML = arrayOfCards
}

function getCharacters(){

    //devuelve los personajes que yo le indique

    //definir la url
    let url = "https://rickandmortyapi.com/api/character/1,2,55,9,78,192"

    //consumir la url con fetch}
    //promesa exitosa o error
    fetch(url).then( response => {
        //convertir la info a json
        response.json().then( data => {
            printCards(data)
        })
    })
    .catch( error => {
        console.log(error)
    })
}

printCards()
getCharacters()