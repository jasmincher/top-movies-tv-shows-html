

const card = document = document.querySelector('.content');


function poster(data) {

  const info = data.map(movie => {

    let img = movie.poster_path;

    let title = movie.title;

    return `
  <a target="_blank" class="poster" href="https://www.themoviedb.org/movie/${movie.id}">


  <div class="img" style="background-image: url(//image.tmdb.org/t/p/original${movie.poster_path});"> 
    
  
  <div class="overlay">
  <p style="line-height:1%;">${title}</p>
  <p>${movie.overview}</p>
   
  </div>
  </div>
  
  </a>


    `;
  }).join('');


  card.innerHTML += info;

}




var api_url = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/movies?api_key=1fb718e33990d4d733d6e019892804af&session_id=5bdd135621f2870248ccbb1a7250a7b72cb61b15&language=en-US&sort_by=title.asc&page=';

for(var i = 1; i < 3; i++){
var pages = api_url + i;

fetch(pages)

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    movieList = data.results;
    poster(movieList);

  });


}