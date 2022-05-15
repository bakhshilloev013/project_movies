"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из посмотренных фильмов?", ""),
      b = +prompt("На сколько вы её оцените?", ""),
      c = prompt("Второй из посмотренных фильмов?", ""),
      d = +prompt("На сколько вы её оцените?", "");

personalMovieDB['movies'][a] = b;
personalMovieDB['movies'][c] = d;
console.log(personalMovieDB);


