window.onload = function() {
  //Paso 1: Leo Storage

  var recuperoStorage = localStorage.getItem("seriesFavoritas");

console.log(recuperoStorage);
  // Si todavia no tenia SERIES favoritas
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritas = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritas = JSON.parse(recuperoStorage);
  }

  for (var i = 0; i < seriesFavoritas.length; i++) {
    // BUSCO LA SERIE Y LA MUESTRO
    fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritas[i] + "?api_key=9901ee414425659325dc091c288e33c9&language=Es&page")
      .then(function(response) {
        return response.json();
        console.log(response);
      })
     .then(function(results) {
       console.log(results);
        document.querySelector(".favoritas").innerHTML += "<div class='punt'><a href=detalle.html?id="+ results.id +"><img src=http://image.tmdb.org/t/p/w200"+ results.poster_path +"></a><h5>" + results.name + "</h5><h6>"+results.vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
      })
  }
}
