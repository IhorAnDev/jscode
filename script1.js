"use strict";

let numberOfilms;

function start() {
    numberOfilms = +prompt("Skolko filmov vi uzhe posmotreli?", " ");

    while (numberOfilms == '' || numberOfilms == null || isNaN(numberOfilms)) {
        numberOfilms = +prompt("Skolko filmov vi uzhe posmotreli?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfilms,
    movies: {},
    actors: {},
    genre: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Odin iz poslednix prosmotrennix filmov?", " "),
            b = prompt("Na ckolko ocenite ego?", " ");
        if (a != "" && a != null && b != null && b != "" && a.length <= 50 && b.length <= 50) {
            personalMovieDB.movies[a] = b;
            console.log('Vse horosho');
        } else {
            console.log('U vas pustaya stroka ili bolshe 50 simvolov');
            i--;
        }
    }
}
// rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('U vas malo prosmotrennih filmov');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('U vas srednee kol vo');
    } else if (personalMovieDB.count >= 30) {
        console.log('Vi kinoman');
    } else {
        console.log('Error v obshem');
    }

}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Vash lubimii janr pod nomerom ${i}`);
        personalMovieDB.genre[i - 1] = genre;

    }
}
writeYourGenres();