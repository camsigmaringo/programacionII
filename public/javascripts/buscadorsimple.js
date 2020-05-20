window.onload = function(){

  var numeroPagina = 1

  var verMas = document.querySelector(".ver")

  var query = new URLSearchParams(location.search);

  var loBuscado = query.get('buscador')

      fetch("https://api.themoviedb.org/3/search/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&query="+loBuscado+"&page="+numeroPagina)
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        console.log(respuesta);

        var serie = respuesta.results;
        console.log(serie);

        if (serie.length == 0){
          document.querySelector(".total").innerHTML += "<h2> No se han encontrado resultados para '" + loBuscado + "', por favor intenta denuevo.</h2><div class='buscadorn'><form class='buscadornuevo' action='buscadorsimple' method='get'><input type='text' class='white' name='buscador' requiered value='' placeholder= 'Buscar.....'><input type='submit' class='lupa' name='' value=''></form><div>"
          // cuando no se encuentra el resultado con dos tres letras minimas de una serie

          document.querySelector(".ver").style.display = "none"
        }
        else{
          document.querySelector(".resultado").innerHTML += "<h2>Resultado de '"+ loBuscado +"':</h2>"
          for (var i = 0; i < serie.length; i++) {
            if(serie[i].vote_average != 0 && serie[i].poster_path != null){
            document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path+"></a><h5>"+serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

            document.querySelector(".ver").style.display = "block";


          }
          else {
           
          }
          }
          // si no se ha encontrado algo la pagina te sugiere buscar de nuevo
        }
        })

      .catch(function(error) {
        console.log(error)
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


      verMas.onclick = function(){
      numeroPagina++;

      fetch("https://api.themoviedb.org/3/search/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&query="+loBuscado+"&page="+numeroPagina)
      .then(function(response) {
        return response.json();
      })
      .then(function(respuesta) {
        console.log(respuesta);

        var serie = respuesta.results;
        console.log(serie);
        if (respuesta.results.length != 0) {
          for (var i = 0; i < serie.length; i++) {
            if(serie[i].vote_average != 0 && serie[i].poster_path != null){
            document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path+"></a><h5>"+serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

            document.querySelector(".ver").style.display = "block";
            }
          }
          // i++ para que se sume uno y el != es para que siginifque que sea distinto de cero.
        }else {
          document.querySelector(".ver").style.display = "none";
          document.querySelector(".falla").innerHTML += "<h3>No se han encontrado más resultados para '"+ loBuscado + "'</h3>";
        }

      })



}


      }
  // console.log(loBuscado);
