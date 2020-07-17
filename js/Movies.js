'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, b;
for(let i = 0; i < 1; i++) {
    a = prompt('Один из последних просмотренных фильмов?', '');
    b = prompt('На сколько оцените его?', '');
    if (a === null || a.length > 50 || a === '') {
        i -= 1;
    }
}

personalMovieDB.movies[a] = b;

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