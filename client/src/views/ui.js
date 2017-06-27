var filmsSeedData = require('../models/films_seed_data.js');

var UI = function(){
  var films = filmsSeedData();
  this.render(films);
}

UI.prototype = {
  createText: function(text, label){
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label){
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  createReview: function(container, review){
    this.appendText(container, review.comment, "Comment: ");
    this.appendText(container, review.rating, "Rating: ");
    this.appendText(container, review.author, "Author: ");
  },

  render: function(films) {
    var container = document.getElementById("films");  //this is a '<ul></ul>'

    for(var film of films) {
      var li = document.createElement("li");
      this.appendText(li, film.title, "Film: ");
      this.appendText(li, film.genre, "Genre: ");

      for(var review of film.reviews){
        this.createReview(li, review);
      }
      container.appendChild(li);
    }
  }
}

module.exports = UI;
