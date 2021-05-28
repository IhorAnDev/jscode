"use strict";

function first() {
    // Do something
    setTimeout(function () {
        console.log('1');
    }, 500);
}

function second() {
    console.log('2');
}
first();
second();

function learJS(lang, callback) {
    console.log(`i know: ${lang}`);
    callback();
}

function funcJS() {
    console.log('ya znay js');
}

learJS('JS', funcJS);