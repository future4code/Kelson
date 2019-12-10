"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const moment = require("moment");
const path = require("path");
const filePach = path.join(__dirname, "textos");
const getEvents = () => {
    let textosJson = "";
    const promisefile = ((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        const texto = data.toString();
        textosJson += texto;
    });
    const promise = new Promise((resolve, reject) => {
        fs_1.readFile(filePach + "/date.json", (err, data) => {
            promisefile(err, data);
            resolve();
        });
    });
    Promise.all([promise]).then(() => {
        console.log(textosJson);
    });
};
const createEvent = (event) => {
    if (event[0].date.unix() < moment().unix()) {
        console.log("Erro. Entre com uma data valida");
        return;
    }
    if (typeof event[0].name !== "string" || typeof event[0].description !== "string") {
        console.log("Erro. Entre com todos os valores.");
        return;
    }
    const promisefile = ((err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        let json = {};
        json.push(...JSON.parse(data.toString()));
        json.push(...event),
            fs_1.writeFile((filePach + "/date.json"), JSON.stringify(json), () => getEvents());
    });
    fs_1.readFile(filePach + "/date.json", (err, data) => {
        promisefile(err, data);
    });
};
const date = {
    name: "date",
    description: "date witn Jessica",
    date: moment("13/03/2020 20:00", "DD/MM/YYYY HH:mm")
};
createEvent([date]);
//# sourceMappingURL=exer01.js.map