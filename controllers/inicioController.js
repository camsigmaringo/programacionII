let inicioController = {
    inicio: function (){
        fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=9901ee414425659325dc091c288e33c9&language=en-US&page=1")
            .then(function(response) {
                return response.json();
            })
            .then(function(respuesta) {
                console.log(respuesta.results[9]);

                var serie = respuesta.results;
                for (var i = 0; i < serie.length; i++) {

                document.querySelector(".puntuadas").innerHTML += "<div class='punt'><a href=detalle?id="+ serie[i].id +"><img src=http://image.tmdb.org/t/p/w200"+ serie[i].poster_path +"></a><h5>" + serie[i].name + "</h5><h6>"+serie[i].vote_average+"<ion-icon name='star'></ion-icon></h6></div>"

                }
            })
            .catch(function(error) {
                alert("Error, perdon, vuelva mas tarde")
            })
    }
}

module.export = inicioController;