"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var specialty;
(function (specialty) {
    specialty["HTML"] = "HTML";
    specialty["CSS"] = "CSS";
    specialty["JS"] = "JS";
    specialty["React"] = "React";
    specialty["Redux"] = "Redux";
    specialty["Back"] = "Back";
    specialty["POO"] = "POO";
})(specialty = exports.specialty || (exports.specialty = {}));
class Instructor {
    constructor(name, email, bornDate, specialty) {
        this.name = name;
        this.email = email;
        this.bornDate = bornDate;
        this.specialty = specialty;
    }
}
exports.Instructor = Instructor;
//# sourceMappingURL=instructors.js.map