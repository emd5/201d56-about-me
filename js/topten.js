'use strict'


// Array of top 10 movies.
const topTenStarWarsMovies = [
  'Revenge of the Sith',
  'Rogue One',
  'Empire Strikes Back',
  'Return of the Jedi',
  'The Force Awakens',
  'Han Solo',
  'A New Hope',
  'The Last Jedi',
  'Attack of the Clones',
  'The Phantom Menace'
];

for (let i=0; i < topTenStarWarsMovies.length; i++){
  let topTen = document.createElement('LI');
  let topTenText = document.createTextNode(topTenStarWarsMovies[i]);
  topTen.appendChild(topTenText);
  document.getElementById('topten').appendChild(topTen);
}
