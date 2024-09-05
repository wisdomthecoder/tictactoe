let app = document.getElementById("app");
let id1 = document.getElementById("id1");
let id2 = document.getElementById("id2");
let id3 = document.getElementById("id3");
let id4 = document.getElementById("id4");
let id5 = document.getElementById("id5");
let id6 = document.getElementById("id6");
let id7 = document.getElementById("id7");
let id8 = document.getElementById("id8");
let id9 = document.getElementById("id9");
let winTxt = document.getElementById("win");

let ifFirst = true;
let clicked = [];

let firGamer = [];
let secGamer = [];
let fGIncr = 0;
let scIncr = 0;
let win = [];
let winnningConditions = [
    [1, 2, 3],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 5, 7],
    [3, 6, 9],
    [4, 5, 6],
    [7, 8, 9],

];
function tst() {
    window.location.reload(true)
}

function onClick(elem) {
    if (!clicked.includes(elem)) {
        elem.style.backgroundColor = ifFirst ? 'red' : "rgb(30, 255, 0)";
        elem.innerHTML = ifFirst ? "X" : "O"
        ifFirst ? firGamer.push(Number.parseInt(elem.id.toString().at(-1))) : secGamer.push(Number.parseInt(elem.id.toString().at(-1)));
        clicked.push(elem);
        ifFirst ? fGIncr++ : scIncr++;
        checkWin();
        ifFirst = !ifFirst;

    }

}

function checkWin() {
    if (fGIncr > 4) {
        winTxt.style.display = "block"
        winTxt.innerHTML = "Draw"
        setInterval(function () {
            window.location.reload(true);
        }, 2000)
    } else if (fGIncr > 2) {
        for (var i in winnningConditions) {

            if (ifFirst) {
                if (winnningConditions[i].every(item => firGamer.includes(item))) {
                    winTxt.innerHTML = "X Won"
                    winTxt.style.display = "block"
                    win = winnningConditions[i];
                    setInterval(function () {
                        window.location.reload(true);
                    }, 2000)
                }
            } else {
                if (winnningConditions[i].every(item => secGamer.includes(item))) {
                    winTxt.innerHTML = "O Won"
                    winTxt.style.display = "block"
                    winTxt.style.color = "blue"
                    setInterval(function () {
                        window.location.reload(true);
                    }, 2000)


                }
            }
        }
    }


}
// alert("Kwopnan Won")
id1.onclick = function () { onClick(id1) };
id2.onclick = function () { onClick(id2) };
id3.onclick = function () { onClick(id3) };
id4.onclick = function () { onClick(id4) };
id5.onclick = function () { onClick(id5) };
id6.onclick = function () { onClick(id6) };
id7.onclick = function () { onClick(id7) };
id8.onclick = function () { onClick(id8) };
id9.onclick = function () { onClick(id9) };
