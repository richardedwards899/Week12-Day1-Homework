var Film = require('./film');
var Review = require('./review');

var filmsSeedData = function(){

  var review1 = new Review({
    comment: "It's not even a thing. What just happened. I want my life back.",
    rating: 1,
    author: "Craig"
  });

  var review2 = new Review({
    comment: "Pew pew pew lightsabers space cowboys whoot what's not to love",
    rating: 100,
    author: "Harrison"
  });

  var film1 = new Film({
    title: "Now You See Me",
    actors: ["Woody Harrelson", "Jesse Eisenberg"],
    genre: "Heist thriller"
  });

  var film2 = new Film({
    title: "Star Wars Episode IV: A New Hope",
    actors: ["Harrison Ford", "Alec Guiness"],
    genre: "Stilted nonsense"
  });

  film1.addReview(review1);
  film2.addReview(review2);

  return [film1, film2];
}

module.exports = filmsSeedData;
