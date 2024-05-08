//INFO PERSONAJE
function fetchLucke(){
    let xhr = new XMLHttpRequest();
    let url = "https://swapi.py4e.com/api/people/1/"
    xhr.open("GET",url,true);
    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status === 200){
            let response = JSON.parse(this.responseText);
            console.log(response)
            displayHero(response)

        } else if(this.readyState == 4){
            console.log("Error :(",this.statusText)
        }
    }
    xhr.send();

}
function displayHero(data){
    let LukeInfo = document.getElementById("lukeInfo");
    if (data.response === "error"){
        LukeInfo.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeInfo.innerHTML = `
        <table class="table table-dark">
                        
            <tr class="table-dark">

                    <th class="table-dark">Height</th>
                    <td class="table-dark">${data.height}</td>

            </tr>
            <tr class="table-dark">

                    <th  class="table-dark">Mass</th>
                    <td  class="table-dark">${data.mass}</td>

            </tr>
            <tr class="table-dark">

                <th  class="table-dark">Hair color</th>
                <td class="table-dark">${data.hair_color}</td>

            <tr class="table-dark">

                <th  class="table-dark">Eye color</th>
                <td class="table-dark">${data.eye_color}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Skin color</th>
                <td class="table-dark">${data.skin_color}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Birth year</th>
                <td class="table-dark">${data.birth_year}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Gender</th>
                <td class="table-dark">${data.gender}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Created</th>
                <td class="table-dark">${data.created}</td>

            </tr>
            <tr class="table-dark">

                <th class="table-dark">Edited</th>
                <td class="table-dark">${data.edited}</td>
            </tr>
            <tr class="table-dark">

                <th class="table-dark">Url</th>
                <td class="table-dark"><a href="${data.url}">${data.url}</a></td>

            </tr>

                
        </table>
        `
    }
}

//INFO HOMEWORLD
function fetchHome(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/planets/1/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displayPlanet(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayPlanet(data){
    let LukeHome = document.getElementById("lukeHome");
    if (data.response === "error"){
        LukeHome.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeHome.innerHTML = `
            <table class="table table-dark">
                <tr>    
                    <th class="table-dark">Homeworld</th>
                
                    <td> 
                        <table class="table table-light">
                                
                            <tr class="table-light">
                
                                <th class="table-light">Name</th>
                                <td class="table-light">${data.name}</td>
                
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Orbital period</th>
                                <td class="table-light">${data.orbital_period}</td>
            
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Diameter</th>
                                <td class="table-light">${data.diameter}</td>
                
                            </tr>
                            <tr class="table-light">
                
                                <th class="table-light">Climate</th>
                                <td class="table-light">${data.climate}</td>
                
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Gravity</th>
                                <td class="table-light">${data.gravity}</td>

                            </tr>
                            <tr class="table-dark">
            
                                <th class="table-light">Terrain</th>
                                <td class="table-light">${data.terrain}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Surface water</th>
                                <td class="table-light">${data.surface_water}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Population</th>
                                <td class="table-light">${data.population}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Created</th>
                                <td class="table-light">${data.created}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Edited</th>
                                <td class="table-light">${data.edited}</td>
            
                            </tr>
                            <tr class="table-light">
            
                                <th class="table-light">Url</th>
                                <td class="table-light"><a href="${data.url}">${data.url}</a></td>
            
                            </tr>
                        </table>
                    </td>
                </tr>

            </table>
        
        `
    }
}

//INFO FILM
function fetchMovie1(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/films/1/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie1(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayMovie1(data){
    let LukeFilm1 = document.getElementById("lukeFilm1");
    if (data.response === "error"){
        LukeFilm1.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm1.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.release_date}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
function fetchMovie2(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/films/2/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie2(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayMovie2(data){
    let LukeFilm2 = document.getElementById("lukeFilm2");
    if (data.response === "error"){
        LukeFilm2.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm2.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.release_date}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
function fetchMovie3(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/films/3/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie3(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayMovie3(data){
    let LukeFilm3 = document.getElementById("lukeFilm3");
    if (data.response === "error"){
        LukeFilm3.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm3.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.release_date}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
function fetchMovie6(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/films/6/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie6(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayMovie6(data){
    let LukeFilm6 = document.getElementById("lukeFilm6");
    if (data.response === "error"){
        LukeFilm6.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm6.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.release_date}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
function fetchMovie7(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/films/7/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response3 = JSON.parse(this.responseText);
                console.log(response3)
                displayMovie7(response3)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayMovie7(data){
    let LukeFilm7 = document.getElementById("lukeFilm7");
    if (data.response === "error"){
        LukeFilm7.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeFilm7.innerHTML = `
        
            <table class="table table-dark">
                    
                <tr class="table-light">

                    <th class="table-light">Name</th>
                    <td class="table-light">${data.title}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Episode ID</th>
                    <td class="table-light">${data.episode_id}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Opening crawl</th>
                    <td class="table-light">${data.opening_crawl}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Director</th>
                    <td class="table-light">${data.director}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Producer</th>
                    <td class="table-light">${data.producer}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Release date</th>
                    <td class="table-light">${data.release_date}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>

                </tr>
                <tr class="table-dark">

                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>

                </tr>
            </table>
        
        `
    }
}
function fetchMovies(){
    fetchMovie1()
    fetchMovie2()
    fetchMovie3()
    fetchMovie6()
    fetchMovie7()
}
//SPECIES
function fetchSpecies(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/species/1/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displaySpecies(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displaySpecies(data){
    let LukeSpecies = document.getElementById("lukeSpecies");
    if (data.response === "error"){
        LukeSpecies.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeSpecies.innerHTML = `
            <table class="table table-dark">     
                <tr class="table-light">
                
                    <th class="table-light">Name</th>
                    <td class="table-light">${data.name}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Classification</th>
                    <td class="table-light">${data.classification}</td>
            
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Designation</th>
                    <td class="table-light">${data.designation}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Average height</th>
                    <td class="table-light">${data.average_height}</td>
                
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Skin colors</th>
                    <td class="table-light">${data.skin_colors}</td>

                </tr>
                <tr class="table-dark">
            
                    <th class="table-light">Hair colors</th>
                    <td class="table-light">${data.hair_colors}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Eye colors</th>
                    <td class="table-light">${data.eye_colors}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Average lifespan</th>
                    <td class="table-light">${data.average_lifespan}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">language</th>
                    <td class="table-light">${data.language}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>
                </tr>
            </table>
        `
    }
}
//VEHICLES
function fetchVehicle1(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/vehicles/14/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displayVehicle1(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayVehicle1(data){
    let LukeVehi = document.getElementById("vehicles1");
    if (data.response === "error"){
        LukeVehi.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeVehi.innerHTML = `
            <table class="table table-dark">

                <tr class="table-light">
                
                    <th class="table-light">Name</th>
                    <td class="table-light">${data.name}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Model</th>
                    <td class="table-light">${data.model}</td>
            
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Manufacturer</th>
                    <td class="table-light">${data.manufacturer}</td>
                
                </tr>
                <tr class="table-light">
                
                    <th class="table-light">Cost in credits</th>
                    <td class="table-light">${data.cost_in_credits}</td>
                
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Length</th>
                    <td class="table-light">${data.length}</td>

                </tr>
                <tr class="table-dark">
            
                    <th class="table-light">Max atmosphering speed</th>
                    <td class="table-light">${data.max_atmosphering_speed}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Crew</th>
                    <td class="table-light">${data.crew}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Passengers</th>
                    <td class="table-light">${data.passengers}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Cargo capacity</th>
                    <td class="table-light">${data.cargo_capacity}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Consumables</th>
                    <td class="table-light">${data.consumables}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Vehicle class</th>
                    <td class="table-light">${data.vehicle_class}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Created</th>
                    <td class="table-light">${data.created}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Edited</th>
                    <td class="table-light">${data.edited}</td>
            
                </tr>
                <tr class="table-light">
            
                    <th class="table-light">Url</th>
                    <td class="table-light"><a href="${data.url}">${data.url}</a></td>
            
                </tr>

            </table>
        `
    }
}
function fetchVehicle2(){
    let xhr = new XMLHttpRequest();
        let url = "https://swapi.py4e.com/api/vehicles/30/"
        xhr.open("GET",url,true);
        xhr.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
                let response = JSON.parse(this.responseText);
                console.log(response)
                displayVehicle2(response)
            } else if(this.readyState == 4){
                console.log("Error :(",this.statusText)
            }
        }
        xhr.send();
}
function displayVehicle2(data){
    let LukeVehi = document.getElementById("vehicles2");
    if (data.response === "error"){
        LukeVehi.innerHTML = `<p>Error: ${data.error}</p>`
    } else{
        LukeVehi.innerHTML = `
            <table class="table table-dark">
              
                <table class="table table-light">
                                
                    <tr class="table-light">
                
                        <th class="table-light">Name</th>
                        <td class="table-light">${data.name}</td>
                
                    </tr>
                    <tr class="table-light">
                
                        <th class="table-light">Model</th>
                        <td class="table-light">${data.model}</td>
            
                    </tr>
                    <tr class="table-light">
                
                        <th class="table-light">Manufacturer</th>
                        <td class="table-light">${data.manufacturer}</td>
                
                    </tr>
                    <tr class="table-light">
                
                        <th class="table-light">Cost in credits</th>
                        <td class="table-light">${data.cost_in_credits}</td>
                
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Length</th>
                        <td class="table-light">${data.length}</td>

                    </tr>
                    <tr class="table-dark">
            
                        <th class="table-light">Max atmosphering speed</th>
                        <td class="table-light">${data.max_atmosphering_speed}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Crew</th>
                        <td class="table-light">${data.crew}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Passengers</th>
                        <td class="table-light">${data.passengers}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Cargo capacity</th>
                        <td class="table-light">${data.cargo_capacity}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Consumables</th>
                        <td class="table-light">${data.consumables}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Vehicle class</th>
                        <td class="table-light">${data.vehicle_class}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Created</th>
                        <td class="table-light">${data.created}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Edited</th>
                        <td class="table-light">${data.edited}</td>
            
                    </tr>
                    <tr class="table-light">
            
                        <th class="table-light">Url</th>
                        <td class="table-light"><a href="${data.url}">${data.url}</a></td>
            
                    </tr>
            </table>
          
        `
    }
}

function fetchVehi(){
    fetchVehicle1()
    fetchVehicle2()
}
window.addEventListener("load", fetchLucke(),fetchHome(), fetchMovies(),fetchSpecies(),fetchVehi());