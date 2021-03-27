"use strict";

const argv = process.argv;

let total = 0;
for (let i = 2; i < argv.length; i++) {
  total += +argv[i];
}

console.log(total);

// let total =  Number(argv[2]) + Number(argv[3]) + Number(argv[4]);

// console.log(total);