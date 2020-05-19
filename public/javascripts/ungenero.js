window.onload = function (){

var verMas = document.querySelector(".ver");
var numeroPagina = 1;

var idGen = new URLSearchParams(location.search).get("id");
var tituloGenero = new URLSearchParams(location.search).get("tituloGenero");
console.log(idGen);
// esto es lo que te da en la url el numero que yo depsues tengo que ir cambiando por los disntitos generos
fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres="+ idGen +"&page=" + numeroPagina)
.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
  console.log(respuesta);

//VINCULACION CON APPI

  var serie = respuesta.results;

  var div = document.querySelector(".total")
  console.log(div);

  for (var i = 0; i < serie.length; i++) {
    if(serie[i].vote_average != 0 && serie[i].poster_path != null){
      //OJO, CAMBIAR
        document.querySelector('h2.titulo-genero').innerText = tituloGenero
        div.innerHTML += "<div class='punt'><a href=detalle.html?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"></a><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

        //para que vaya cambiando el genero Y LAS PELICULAS del genero segun el click que hiciste en el genero general.
    }

  }
})
.catch(function(error) {
  alert("Error, perdon, vuelva mas tarde")
})

  // fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(respuesta) {
  //   console.log(respuesta.genres);
  //
  //   var genero = respuesta.genres;
  //   for (var i = 0; i < genero.length; i++) {
  //     document.querySelector(".generos").innerHTML += "<a href=ungenero.html?id="+ genero[i].id + "><div class='genero'><h3>"+ genero[i].name +"</h3><img src='../Archivos/"+genero[i].name +".jpg' alt=''><div></a>"}
  // })

// le tenes que agregar para que busco en un genero.html el id que sea relfejado en el otro html para que te busque en cierto genero ciertas perliculas. <a href=ungenero.html?id= tiene que estar vinculado con el js de genero.

var buscar = document.querySelector(".buscadors") //ESTO ES el formT
var buscado = document.querySelector(".white") //ESTO ES EL INPUT PARA ESCRIBIR

function minimoTres(){
alert("introducí al menos 3 caracteres")
}

buscar.onsubmit = function(event){
  if(buscado.value.length < 3) {
    event.preventDefault();
    $.notify("Introducí por lo menos tres caracteres", {autoHideDelay: 3000});
  }
}
// BUSCADOR INTROUCCIR MAS LETRAS PARA QUE SEA MAS FACIL PARA EL BUSCADOR. 

verMas.onclick = function(){
numeroPagina++;

fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_genres="+ idGen +"&page=" + numeroPagina)
// ViNCULACION CON APPI CON EL NUMERO DE PAGINA PARA EL TITULO DEL GENERO.

.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
  console.log(respuesta);

  var serie = respuesta.results;

  var div = document.querySelector(".total")
  console.log(div);

  for (var i = 0; i < serie.length; i++) {
    if(serie[i].vote_average != 0 && serie[i].poster_path != null){
      div.innerHTML += "<div class='punt'><a href=detalle.html?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"></a><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
// pARA QUE TE MUESTRE MAS SERIES D EUN GENERO CUANDO PONES "VER MAS"

      //document.querySelector(".textof").innerHTML += "<h2>"+serie[].genres+":</h2>"
  }



})
};





}
