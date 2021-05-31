"use strict";

const options = {
    name: "test",
    width: 1024,
    heigth: 1024,
    colors: {
        border: "black",
        bg: "red"
    }
};

// options.name = "Hey";
// console.log(options.name);

// delete options.name;
// console.log(options);

for (let key in options) {
    if (typeof (options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Svoistvo ${i} imeet znacheniye ${options[key][i]}`);
        }
    } else {
        console.log(`Svoistvo ${key} imeet znacheniye ${options[key]}`);
    }
}

