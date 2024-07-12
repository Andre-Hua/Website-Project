//cosnt for setting
const APILINK = 'https://api.themoviedb.org/3/discover/movie? sort_by=popularity.desc&api_key=9f47ab9f0a5dd968843678e3a544dc48&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=9f47ab9f0a5dd968843678e3a544dc48&query="; // link the search bar input into the API after query=

const main = document.getElementById('section'); // get the section element from the html by referring the ID
const form = document.getElementById('form');
const search = document.getElementById('query'); 



// fetch movie data from an external API, process this data, and dynamically generate HTML elements to display the movie information on a webpage. 

returnMovies(APILINK);


function returnMovies(url){
  fetch(url).then(res => res.json()) //fetches data from the provided URL and converts the response to JSON format
  .then(function(data){
  console.log(data.results);
  data.results.forEach(element => { //iterates over each movie in the results array -> match the format we defined in the HTML file
      const div_card = document.createElement('div'); // for each element (card,row, column) fed from URL link, creates a div element for the 'card' and sets its class to 'card'.
      div_card.setAttribute('class', 'card');

      const div_row = document.createElement('div');
      div_row.setAttribute('class', 'row');

      const div_column = document.createElement('div');
      div_column.setAttribute('class', 'column');

      const image = document.createElement('img');
      image.setAttribute('class', 'thumbnail');
      image.setAttribute('id', 'image');

      const title = document.createElement('h3');
      title.setAttribute('id', 'title');

      const center = document.createElement('center');

      title.innerHTML = `${element.title}`; // insert the title of the movie into the title element
      image.src = IMG_PATH + element.poster_path;

      //append elements to each other -> create a completed card for each movie
      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row);
  });
});
}


form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevents the form from submitting and refreshing the page
  main.innerHTML = '';

  const searchItem = search.value;

  if (searchItem) {
    returnMovies(SEARCHAPI + searchItem); // return the search erray to the API link
    search.value = "";
  }
});