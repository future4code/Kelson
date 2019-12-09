"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = require("path");
const filePach = path.join(__dirname, "textos");
let textosJuntos = "";
const promisefile = ((err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const texto = data.toString();
    textosJuntos += texto;
    return texto;
});
fs_1.readdir(filePach, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }
    const textos = files.map(file => {
        const promise = new Promise((resolve, reject) => {
            fs_1.readFile(filePach + "/" + file, (err, data) => {
                promisefile(err, data);
                resolve();
            });
        });
        return promise;
    });
    Promise.all(textos).then((values) => {
        console.log(textosJuntos);
    });
});
//# sourceMappingURL=exer01.js.map