"use strict";

function one(x) {
    function two() {
        const a = +prompt("Угадай число от 1 до 100");

        if (a === x) {
            alert("Поздравляю, Вы угадали!!!");
        } else if (a === 0) {
            alert("Игра окончена");
        } else if (a > x) {
            alert("Загаданное число больше");
            two();
        } else if (x > a) {
            alert("Загаданное число меньше");
            two();
        } else if (a !== parseFloat()) {
            alert("Введите число");
            two();
        }
    }
    two();
}

one(40);