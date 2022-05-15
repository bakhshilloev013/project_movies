"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastMovie = prompt("Один из посмотренных фильмов?", "");
let ratingOfMovie = +prompt("На сколько вы её оцените?", "");

personalMovieDB['movies'][lastMovie] = ratingOfMovie;
console.log(personalMovieDB);


