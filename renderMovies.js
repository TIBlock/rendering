
function renderMovies(movies) {
    let movieFill = movies.map(movieInfo).join('');
    return `
        <div class="text-center mt-5">
            ${movieFill}
        </div>
        `
}

function movieInfo(movies){

return    `
<div class="movie_block">
    <img class='movie_poster' src='${movies.poster}'>
    <div class="movie_info">
        <div class="movie_title">${movies.title}
            <div class="movie_year">${movies.year}</div>
        </div> 
        <div class="movie_rating">IMDB:<br>${movies.imdbRating}/10</div>
        <div class="rotten_tomatoes">Rotten Tomatoes:<br>${movies.rottenTomatoesRating*100}%</div>  
    </div><br>
</div>
`
}


function movies() {
    var content = document.getElementById('content');

    var moviesAbstraction = [
        {
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]

    content.innerHTML = renderMovies(moviesAbstraction);

}