const card = document = document.querySelector('.content');


function poster(data){

  const info = data.map(tv => {
  
    let img = tv.poster_path;

    let title = tv.name;

    return `

  <a href= "https://www.themoviedb.org/tv/${tv.id}" class="card" target= "_blank">

  <div class="front" style = "background-image: url(https://image.tmdb.org/t/p/original${tv.poster_path});">


      
  
  
      


  <p>${title}</p>
  </div>

  
  <div class = "back">
  
  <div>
  
  <p class="overview"> ${tv.overview}</p>
  
  </div>

  </div>

  </a>
    `;
  })


card.innerHTML += info;

}








const api_url = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/tv?api_key=1fb718e33990d4d733d6e019892804af&language=en-US&session_id=b6b330efa1be1637afe86ef483a7093c96c21939&sort_by=created_at.asc&page=1';





fetch(api_url)

.then(function(resp) {   
  return resp.json();
})

.then(function(data) {
  tvList = data.results;
  poster(tvList);

});

