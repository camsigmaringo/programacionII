window.onload = function (){
 //numero entre 1 y 10
  var random = Math.floor(Math.random()*10000)+1;

  console.log(random);


    function serieAlAzar (){

      fetch("https://api.themoviedb.org/3/tv/" + random + "?api_key=9901ee414425659325dc091c288e33c9&language=Es")
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        console.log(respuesta);


        var nombre = respuesta.name;
        var anio = respuesta.first_air_date;
        var poster = respuesta.poster_path;
        var estrellas = respuesta.vote_average;
        var lenguajeOriginal = respuesta.original_language;
        var sinopsis = respuesta.overview;



        if (lenguajeOriginal == "en"){
          lenguajeOriginal = "Ingles"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }

        if (lenguajeOriginal == "fr"){
          lenguajeOriginal = "Francés"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }
        if (lenguajeOriginal == "ja"){
          lenguajeOriginal = "Japonés"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }
        if (lenguajeOriginal == "es"){
          lenguajeOriginal = "Español"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }
        if (lenguajeOriginal == "pt"){
          lenguajeOriginal = "Portugués"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }
        if (lenguajeOriginal == "it"){
          lenguajeOriginal = "Italiano"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }
        if (lenguajeOriginal == "ko"){
          lenguajeOriginal = "Koreano"
        }
        else {
          lenguajeOriginal= lenguajeOriginal
        }

        if (respuesta.genres.length > 0) {
          var generos = respuesta.genres[0].name;
          var generoId = respuesta.genres[0].id;

        }else {
          var generos = ""
          var generoId = ""

        }

      if (poster != "null" && estrellas != 0 && anio != "null") {

      var total = document.querySelector(".total");
      total.innerHTML += `<div class="total"><div class="imagen"><img src="http://image.tmdb.org/t/p/w200/`+ poster + `" alt=""></div><div class="detalle"><div class="display">
      <h2>`+nombre +`</h2><h4>`+estrellas+`<ion-icon name="star"></ion-icon></h4></div>
      <h3>`+ anio +`</h3><h6>Genero: <a href=ungenero?id=`+ generoId + "&tituloGenero=" + generos +`>`+generos+`</a></h6><h6 class="">Lenguaje original: `+ lenguajeOriginal +`</h6>
      <p>`+ sinopsis +`</p></div></div>`

      // document.querySelector(".titulo").innerHTML += "<br><h3>Titulos similares para "+ nombre +":</h3>"

    }else {
      random++;
      serieAlAzar();
      }


    })


    }
  serieAlAzar ()








}
