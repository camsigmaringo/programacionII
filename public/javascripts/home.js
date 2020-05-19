console.log("ok");

window.onload = function() {
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    //console.log(respuesta.results[9]);

    var serie = respuesta.results;
    for (var i = 0; i < serie.length; i++) {

      document.querySelector(".puntuadas").innerHTML += "<div class='punt'><a href=detalle.html?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"></a><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })


  fetch("https://api.themoviedb.org/3/tv/popular?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.results[9]);

    var favs = respuesta.results;
    for (var i = 0; i < favs.length; i++) {
      document.querySelector(".favoritas").innerHTML += "<div class='punt'><a href=detalle.html?id="+ favs[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ favs[i].poster_path+"></a><h5>"+favs[i].name + "</h5><h6>"+favs[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  })


  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })

  fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.results[9]);

    var aire = respuesta.results;
    for (var i = 0; i < aire.length; i++) {
      document.querySelector(".alaire").innerHTML += "<div class='punt'><a href=detalle.html?id="+ aire[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ aire[i].poster_path+"></a><h5>"+aire[i].name + "</h5><h6>"+aire[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  })
  .catch(function(error) {
    alert("Error, perdon, vuelva mas tarde")
  })





fetch("https://api.themoviedb.org/3/tv/popular?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);

  var favs = data.results;
  for (var i = 0; i < 1; i++) {
    document.querySelector(".favsemana").innerHTML += "<div class='total'><div class='imagen'><a href=detalle.html?id="+ favs[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ favs[i].poster_path +"></a></div><div class='detalle'><div class='display'><h2 class='copia'>"+ favs[i].original_name +"</h2><h4 class='copia'>"+favs[i].vote_average+"<ion-icon name='star'></ion-icon></h4></div><h3 class='copia'>"+ favs[i].first_air_date +"</h3><p class='copia'>"+ favs[i].overview+ "</p></div></div>"

    document.querySelector(".fondo").style.backgroundImage = "url('http://image.tmdb.org/t/p/w200"+ favs[i].backdrop_path +"')"
}
})
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
}
