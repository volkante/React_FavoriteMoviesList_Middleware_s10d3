import { legacy_createStore as createStore } from "redux";

//initialState'i tanımla, bu hep obje oluyor galiba.
const globalInitial = {
  movies: [],
};

//Actionları oluşturma. Filmleri listeye eklemek ve listeden çıkarmak gibi işlemleri tetiklemek için action'lar oluşturacağız. Her action, state'i nasıl değiştireceğini tanımlayan bir nesne olacaktır:

const ADD_MOVIE = "ADD_MOVIE";
const REMOVE_MOVIE = "REMOVE_MOVIE";

export const addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    movie,
  };
};

export const removeMovie = (movie) => {
  return {
    type: REMOVE_MOVIE,
    movie,
  };
};

//Her action türüne göre state'i güncelleyecek şekilde bir reducer yaz. Globalreducer?

const globalReducer = (state = globalInitial, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload.id),
      };
    default:
      return state;
  }
};

//kendi storeunuzu create ediniz
export const myStore = createStore(globalReducer);
