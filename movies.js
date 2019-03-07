let URL_API = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/movies?api_key=1fb718e33990d4d733d6e019892804af&session_id=5bdd135621f2870248ccbb1a7250a7b72cb61b15&language=en-US&sort_by=created_at.asc&page=1';


let movieList = [];
let i = 0;
const card = document.querySelector('.content');
let ca = document.createElement('a');
let img = document.createElement('img');

function mapCards(movies) {

  const html = movies.map(movie => {
    let poster = movie.poster_path;

    let title = movie.title || movie.name;
    let isMovieOrTv = (movie.title) ? 'movie' : 'tv';
    return `
      <a target="_blank"class="card" href="https://www.themoviedb.org/movie/${movie.id}">
    
    
      <div class="front" style="background-image: url(//image.tmdb.org/t/p/original${movie.poster_path});"> 
      <p>${title}</p>
    </div>
    <div class="back">
      <div>
        <p class="overview">${movie.overview}</p>
      
        </div>
    </div>
  </a>
    `;
  }).join('');

  card.innerHTML += html;
}

fetch(URL_API, {
  method: "GET",
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(resp => resp.json())
  .then(data => {
    movieList = ((data.items) || data.results);
    mapCards(movieList);

  })
  .catch((err) => {
    console.log(err);
  })