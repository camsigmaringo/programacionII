
window.addEventListener('load', function() {

  var numeroPagina = 1
  var verMas = document.querySelector(".ver")

  fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=9901ee414425659325dc091c288e33c9&language=en-US")
  .then(function(response) {
    return response.json();
  })
  .then(function(respuesta) {
    console.log(respuesta.genres);
    var genero = respuesta.genres;
    var selectGeneros = document.querySelector("select[name='genero']");
    console.log(selectGeneros);
    for (var i = 0; i < genero.length; i++) {
      selectGeneros.innerHTML += "<option value='" + genero[i].id + "'>" + genero[i].name + "</option>"
      document.querySelector("select[name='gen-e']").innerHTML += "<option value='"+genero[i].id+"'>"+ genero[i].name +"</option>"
    }
})


//Validacion del formulario del buscador avanzado


  var form = document.querySelector('.avanzado');

  form.onsubmit = function (e) {
    document.querySelector(".total").innerHTML = "";

    e.preventDefault()

    var orden = document.querySelector("select[name='orden']").options[document.querySelector("select[name='orden']").selectedIndex].value;

    var anio = document.querySelector("select[name='Año']").options[document.querySelector("select[name='Año']").selectedIndex].value;

    var genero = document.querySelector("select[name='genero']").options[document.querySelector("select[name='genero']").selectedIndex].value;

    var generoE =document.querySelector("select[name='gen-e']").options[document.querySelector("select[name='gen-e']").selectedIndex].value;

//validacion para que solo uno de los generos este completo




      if (genero == "" || generoE == "" ) {
      if (orden == "" && anio == "" && genero == "" && generoE == "") {
        $.notify("selecciona por lo menos un elemento", {autoHideDelay: 3000});
      } else {

        fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=" + orden +"&air_date.gte="+ anio + "&with_genres=" + genero + "&without_genres=" + generoE + "&page=" +  numeroPagina)
        .then(function(response) {
          return response.json();
        })
        .then(function(respuesta) {
        console.log(respuesta)
        var busqueda = respuesta.results
         for (var i = 0; i < busqueda.length; i++) {
             if(busqueda[i].vote_average != 0 && busqueda[i].poster_path != null){{
             document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle?id="+ busqueda[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ busqueda[i].poster_path+"></a><h5>"+busqueda[i].name + "</h5><h6>"+busqueda[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

             document.querySelector(".ver").style.display = "block";
            }
          }

          }
        })
      }
    } else {
      $.notify("Selecciona un solo selector de generos", {autoHideDelay: 3000});

    }




  }
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

var orden = document.querySelector("select[name='orden']").options[document.querySelector("select[name='orden']").selectedIndex].value;

var anio = document.querySelector("select[name='Año']").options[document.querySelector("select[name='Año']").selectedIndex].value;

var genero = document.querySelector("select[name='genero']").options[document.querySelector("select[name='genero']").selectedIndex].value;

var generoE =document.querySelector("select[name='gen-e']").options[document.querySelector("select[name='gen-e']").selectedIndex].value;


fetch("https://api.themoviedb.org/3/discover/tv?api_key=9901ee414425659325dc091c288e33c9&language=en-US&sort_by=" + orden +"&air_date.gte="+ anio + "&with_genres=" + genero + "&without_genres=" + generoE + "&page=" +  numeroPagina)
.then(function(response) {
  return response.json();
})
.then(function(respuesta) {
console.log(respuesta)
var busqueda = respuesta.results
 for (var i = 0; i < busqueda.length; i++) {
     if(busqueda[i].vote_average != 0 && busqueda[i].poster_path != null){{
     document.querySelector(".total").innerHTML += "<div class='punt'><a href=detalle?id="+ busqueda[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ busqueda[i].poster_path+"></a><h5>"+busqueda[i].name + "</h5><h6>"+busqueda[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"
    }
  }

  }
})



};


//var generoValue = document.querySelector('.genero').options[document.querySelector('.genero').selectedIndex].value;

//var generoEValue = document.querySelector('.genero-excluido').options[document.querySelector('.genero-excluido').selectedIndex].value;
//console.log(generoEValue);

//if
 //(generoValue != "" && generoEValue != "") {

  //alert("Selecciona solo un género")

//}
  //console.log(generoEValue);

})
