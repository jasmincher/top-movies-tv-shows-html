let URL_API = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/tv?api_key=1fb718e33990d4d733d6e019892804af&language=en-US&session_id=b6b330efa1be1637afe86ef483a7093c96c21939&sort_by=created_at.asc&page=1';


let tvList = [];
let i = 0;
const card = document.querySelector('.content');
let ca = document.createElement('a');
let img = document.createElement('img');

function mapCards(shows) {

    const html = shows.map(tv => {

        let poster = tv.poster_path;

        let title = tv.title || tv.name;

        let isMovieOrTv = (tv.title) ? 'movie' : 'tv';

        return `<a target="_blank" class="card" href="https://www.themoviedb.org/movie/${tv.id}">
    
    <div class="front" style="background-image: url(//image.tmdb.org/t/p/original${tv.poster_path});"> 
      
      
      <p>${title}</p>
    </div>
    <div class="back">
      <div>
        <p class="overview">${tv.overview}</p>
        
        </div>
    </div>
  </a> ` ;

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
        tvList = ((data.items) || data.results);
        mapCards(tvList);

    })
    .catch((err) => {
        console.log(err);
    })