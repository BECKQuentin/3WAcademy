const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

function onClickShowListMovies(event) {

    event.preventDefault();

    var query = $('input[name=search]').val();

    console.log(query);

    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=' + API_KEY + '&query=' + query, recupAllMovies);

}

function onClickShowDetails() {
    var id = $(this).data('id');
    console.log(id);

    $getJSON('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY, displayDetails);

}
