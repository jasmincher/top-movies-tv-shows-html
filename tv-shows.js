const card = document = document.querySelector('.content');


function poster(data){

  const info = data.map(tv => {
  
    let img = tv.poster_path;

    let title = tv.name;

    console.log(title); 

    
    return `
<a target="_blank" class="poster" href="https://www.themoviedb.org/tv/${tv.id}">

<div class="img" style="background-image: url(//image.tmdb.org/t/p/original${tv.poster_path});"> 
  

<div class="overlay">
<p style="line-height:1%;">${title}</p>
<p>${tv.overview}</p>
 
</div>
</div>

</a> `;
  
}).join('');


card.innerHTML += info;

}




var api_url = 'https://api.themoviedb.org/3/account/5c28184992514138d7bfb12c/favorite/tv?api_key=1fb718e33990d4d733d6e019892804af&language=en-US&session_id=b6b330efa1be1637afe86ef483a7093c96c21939&sort_by=title.asc&page=';

for(var i = 1; i < 3; i++){
  var pages = api_url + i;


fetch(pages)

.then(function(resp) {   
  return resp.json();
})

.then(function(data) {
  tvList = data.results;
  poster(tvList);

});

}


