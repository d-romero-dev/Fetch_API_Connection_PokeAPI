
// Función para realizar la solicitud fetch a LA PokeAPI.

function ApiCall() {
    let pokemon = document.getElementById("busqueda").value.toLowerCase(); // Convierte a minúsculas el texto ingresado.

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se encontró el Pokémon.' + " " + "Verifique que el nombre del Pókemon esté bien escrito.");
            }
            return response.json();
        }) // Se verifica que el nombre del pokemon se ingrese correctamente antes de realizar la solicitud.
        .then(data => {
            
            const pokemonElement = document.querySelector(".pokemon"); // Agrega los datos provinientes de la API en un div de clase "pokemon".
            pokemonElement.innerHTML = `
                <h1>${data.name}</h1>  
                <img src="${data.sprites.front_default}" alt="${data.name}"/>
                <p>Altura: ${data.height} dm</p>
                <p>Peso: ${data.weight} hg</p>
                
            `;
        })
        .catch(error => {
            
            const pokemonElement = document.querySelector(".pokemon");
            pokemonElement.innerHTML = `<p>Debe ingresar un nombre de Pókemon válido en la barra de búsqueda.</p>
                                        <p>Verifique que el campo no esté vacio.</p>
                                        <p>Verifique que el nombre del pokemon este escrito correctamente.</p>`;
        });
} //Se muestran los errores en pantalla para indicar qué pudo fallar si ocurrde un error.




document.getElementById("buscarBtn").addEventListener('click',function(){
    ApiCall();
}); 
//El oyente de eventos realiza la llamada la funcion que realiza fetch, al detectarse un 'click' en el boton "Buscar".





// Función encargada de Borrar el contenido cargado.

function borrarContenido(){
    const pokemonElement = document.querySelector(".pokemon")

    pokemonElement.innerHTML="";
}

document.getElementById("borrarBtn").addEventListener('click', function(){
    borrarContenido()});