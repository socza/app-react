var movies = [
  
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    poster: './img/harry-potter.jpg'
  },

  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    poster: './img/king-lion.jpg'
  },

  {
  	id: 3,
  	title: 'Pulp Fiction',
  	desc: 'Przgody gangstera Vincenta Vegi',
  	poster: './img/pulp-fiction.jpg'
  },

  {
  	id: 4,
  	title: 'Terminator',
  	desc: 'Elektroniczny morderca',
  	poster: './img/terminator.jpg'
  },

];

var moviesElements = movies.map(function(movie) {

	return React.createElement('li', {key: movie.id},
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.poster})
	);

});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));