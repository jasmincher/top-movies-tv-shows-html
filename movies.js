

const card = document = document.querySelector('.content');


function poster(data) {

  const info = data.map(movie => {

    let img = movie.poster_path;

    let title = movie.title;

    return `

  <a href= "https://www.themoviedb.org/tv/${movie.id}" class="card" target= "_blank">

  <div class="front" style = "background-image: url(https://image.tmdb.org/t/p/original${movie.poster_path});">


      
  
  
      


  <p>${title}</p>
  </div>

  
  <div class = "back">
  
  <div>
  
  <p class="overview"> ${movie.overview}</p>
  
  </div>

  </div>

  </a>
    `;
  })


  card.innerHTML += info;

}








const api_url = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/movies?api_key=1fb718e33990d4d733d6e019892804af&session_id=5bdd135621f2870248ccbb1a7250a7b72cb61b15&language=en-US&sort_by=created_at.asc&page=1';




fetch(api_url)

  .then(function (resp) {
    return resp.json();
  })

  .then(function (data) {
    movieList = data.results;
    poster(movieList);

  });

