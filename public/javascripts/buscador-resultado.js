console.log("ok");

window.onload = function(){

  var query = new URLSearchParams(location.search);

  var genero = query.get('genero')

  var generoE = query.get('gen-e')

  var orden = query.get('Orden')

  var anio = query.get('Año')

if(genero == "Selecciona el genero" ){
  genero = null;
}

if(generoE == "Selecciona el genero excluido"){
  generoE = null;
}

if(orden != 'vacio'){
  orden = '&sort_by=' + orden;
}else{
  orden = "";
}

if (anio != null) {
  anio = '&air_date.gte=' + anio
}else{
  anio = "";
}
if(genero != null){
  genero = '&with_genres=' + genero
}else{
  genero = "";
}
if(generoE != null){
  generoE = 'without_genres=' + generoE
}else{
  generoE = "";
}

  fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=" + orden + anio + genero + generoE)
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
  console.log(respuesta)
  var busqueda = respuesta.results
   for (var i = 0; i < busqueda.length; i++) {
       if(busqueda[i].vote_average != 0 && busqueda[i].poster_path != null){

       document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle.html?id="+ busqueda[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ busqueda[i].poster_path+"></a><h5>"+busqueda[i].name + "</h5><h6>"+busqueda[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
      }

  }
})
}
