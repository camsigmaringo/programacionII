

fetch('/getresenasbyuser')
  .then(function(response) {
    return response.json();
  })
  .then(function(results) {
    console.log(results);
    if(results.length == 0){
      document.querySelector(".misresenas").innerHTML += `<div class='resenas'><span class='resena'><p> No hay reseñas</p>`
    } else {
      for (var i = 0; i <results.length; i++) {
        switch(results[i].puntaje){
          case 1:
            var star = `<span class='fa fa-star checked'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>`;
          break;
          case 2:
            var star = `<span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>`;
          break;
          case 3:
            var star = `<span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star'></span>
            <span class='fa fa-star'></span>`;
          break;
          case 4:
            var star = `<span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>`;
          break;
          case 5:
            var star = `<span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>
            <span class='fa fa-star checked'></span>`;
          break;
        }
        document.querySelector(".misresenas").innerHTML += `
        <tr>
            <td><a href='/detalle?id=` + results[i].idPelicula + `'>` + results[i].idPelicula + `</a></td>
            <td>` + results[i].resena + `</td>
            <td><div>` + star + `</div></td>
            <td>` + results[i].created_at + `</td>
            <td>
                <a href='/editarresena/` + results[i].id + `'><i class="fas fa-edit"></i></a>
                <a href='/deleteresena/` + results[i].id + `'><i class="far fa-trash-alt"></i></a>
            </td>
        </tr>`;
        }
      }
  });




  fetch('/getmyprofile')
  .then(function(response) {
    return response.json();
  })
  .then(function(result) {
    console.log(result);
        document.querySelector(".myuserdetail").innerHTML += `
        <tr>
            <td>` + result[0].username + `</td>
            <td>` + result[0].email + `</td>
            <td>` + result[0].born_date + `</td>
        </tr>`;
        
  });