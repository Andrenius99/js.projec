const number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalWovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false

};

const a = prompt('Один из последних просмотренных фильмов', ''),
    b =prompt('На сколько оцените его?',''),
    c =prompt('Один из последних просмотренных фильмов?', ''),
    d =prompt('На сколько оцените его?', '');



personalWovieDB.movies[a] = b;
personalWovieDB.movies[c] - d;

console.log(personalWovieDB);

