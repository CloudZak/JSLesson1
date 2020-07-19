'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    whiel (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function remberMyFilms() {
    let a, b;

    for(let i = 0; i < 1; i++) {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('На сколько оцените его?', '');
        if (a === null || a.length > 50 || a === '') {
            i -= 1;
        }
    }

    personalMovieDB.movies[a] = b;
}

function detectPersonalLevel() {
    if (personalMovieDB.count === 0) {
        alert('Ни один трейлер к фильму вас не заманит');
    } else if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        alert('Вы киноман');
    } else {
        alert('Произошла ошибка');
    }
}

function showMyDB(hidden) {
    if  (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);;
    }

}