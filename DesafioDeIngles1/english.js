const catalog = [
  {
    comedy: [
      {
        title: "Minha Mãe é uma Peça",
        director: "André Pellenz",
        year: 2012,
      },
      {
        title: "If I were a boy",
        director: "Audrey Dana",
        year: 2017,
      },
      {
        title: "Big Momma's House",
        director: "Raja Gosnell",
        year: 2000,
      },
    ],
  },
  {
    action: [
      {
        title: "Top Gun: Maverick",
        director: "Joseph Kosinski",
        year: 2022,
      },
      {
        title: "The Expendables",
        director: "David Callaham",
        year: 2010,
      },
      {
        title: "Die Hard",
        director: "John McTiernan",
        year: 1988,
      },
    ],
  },
  {
    fantasy: [
      {
        title: "The Lord of the Rings: The Fellowship of the Ring",
        director: "Peter Jackson",
        year: 2001,
      },
      {
        title: "The Lord of the Rings: The Two Towers",
        director: "Peter Jackson",
        year: 2002,
      },
      {
        title: "The Lord of the Rings: The Return of the King",
        director: "Peter Jackson",
        year: 2003,
      },
    ],
  },
];

console.log(catalog.length);

const person = {
  name: "Luís",
  surname: "Claudio",
  age: 22,
  favoriteMovie: {
    title: "The Lord of the Rings: The Return of the King",
    genre: "fantasy",
  },
};

function searchFavMovie(favMovie) {
  for (let i = 0; i < catalog.length; i++) {
    let genre = Object.keys(catalog[i])[0];
    if (genre === favMovie.genre) {
      let movies = Object.values(catalog[i])[0];
      for (let j = 0; j < movies.length; j++) {
        if (movies[j].title === favMovie.title) {
          console.log(movies[j].title);
          console.log("great!! this is my favorite movie");
        } else {
          console.log(movies[j].title);
          console.log("not even five stars...");
        }
      }
    }
  }
}
searchFavMovie(person.favoriteMovie);
