let movies = [
  {
    id: 0,
    name: "Frozen",
    score: 7
  },
  {
    id: 1,
    name: "House of Hummingbird",
    score: 10
  },
  {
    id: 2,
    name: "Portrait of a lady on fire",
    score: 10
  }, 
  {
    id: 3,
    name: "Ladybird",
    score: 9
  }
];

export const getMovies = () => movies;


export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
}

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length >= cleanedMovies.length) {
      movies = cleanedMovies;
      return true;
    } else {
      return false;
    }
}

export const addMovie = (name, score) =>  {
    const newMovie = {
      id: `${movies.length + 1}`,
      name,
      score
    };
    movies.push(newMovie);
    return newMovie
}
