function recupAllMovies(response) {

    console.log(response);
    var data = response.results;
    var list = $('<ul id="list">');

    for (var i = 0; i < data.length; i++) {
        list.append($('<li data-id="' + data[i].id + '">').append(data[i].title));
    }

    $("#list").html(list);
    $("#list").removeClass('hide');
}

function displayDetails(response) {

    var result = $('<div>');

    var img = $('<img>').attr('src', url_img + response.poster_path).css('width', '250px');
    var title = $('<h1>').append(response.title);
    var year = $('<h2>').append(response.release_date);
    var desc = $('<p>').append(response.overview);
    var note = $('<p>').append(response.vote_average);
    var companies = $('<div>').append('<h2>Companies</h2>')
    companies.append('<ul>');

    result.append(img).append(title).append(year).append(desc).append(note).append(companies);

    $('#result').html(result);

    for (var i = 0; i < response.production_companies.length; i++) {


        $.getJSON('https://api.themoviedb.org/3/company/' + response.production_companies[i].id + '?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', displayCompany);

    }


}



function displayCompany(response) {

    console.log(response);
    $('#result ul').append('<li><a href="' + response.homepage + '">' + response.name + '</a></li>');

}