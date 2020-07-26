'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    remberMyFilms: function() {
        let a, b;

        for(let i = 0; i < 1; i++) {
            a = prompt('Один из последних просмотренных фильмов?', '');
            b = prompt('На сколько оцените его?', '');
            if (a === null || a.length > 50 || a === '') {
                i -= 1;
            }
        }

        personalMovieDB.movies[a] = b;
    },
    detectPersonalLevel: function() {
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
    },    
    showMyDB: function(hidden) {
        if  (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) {
            let genres = prompt('Введите ваши любимые жанры через запятую').toLowerCase();

            if (genres === '' || genres === null) {
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};