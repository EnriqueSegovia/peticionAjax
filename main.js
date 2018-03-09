var urlServer = 'https://jsonplaceholder.typicode.com/photos';

$.get(urlServer)
    .then(recogerFotos);

function recogerFotos(photos) {

    var trocear = photos.slice(0, 100);
    trocear.forEach(photo => {
        $('#resultados').append(
            `<div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${photo.url}" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${photo.title}.</p>
            </div>
            </div>`
        )
    });+
    console.log(trocear)
}