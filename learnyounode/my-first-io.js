const fs = require("fs");

console.log(process.argv[1]);

const file = fs.readFileSync(process.argv[2]);

const lines = file.toString().split("\n").length;

console.log(lines);
