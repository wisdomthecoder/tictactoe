let id1 = document.getElementById("id1") as HTMLDivElement;
let id2 = document.getElementById("id2") as HTMLDivElement;
let id3 = document.getElementById("id3") as HTMLDivElement;
let id4 = document.getElementById("id4") as HTMLDivElement;
let id5 = document.getElementById("id5") as HTMLDivElement;
let id6 = document.getElementById("id6") as HTMLDivElement;
let id7 = document.getElementById("id7") as HTMLDivElement;
let id8 = document.getElementById("id8") as HTMLDivElement;
let id9 = document.getElementById("id9") as HTMLDivElement;
///
///
///
///
let isX: boolean =true;
///
///
///

let winningConditions:  number[][]= [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [3,5,7],
];



let xUser: number[] = []
let oUser: number[] = []
let clicked: string[] = []

function onClick(elem: HTMLDivElement) {
    if ((clicked.includes(elem.id))) { 
elem.style.cursor = 'not-allowed'
    }else{
   
            elem.innerHTML = isX ? "X" : "O";
        elem.style.backgroundColor = isX?" rgb(3, 110, 110)": "rgb(186, 122, 3)";
        isX?xUser.push(parseInt(elem.id[2])):oUser.push(parseInt(elem.id[2]))
        isX = !isX;
        clicked.push(elem.id)
        setTimeout(
           
            checkWining,100
        )
    }

}
function checkWining(){
    winningConditions.forEach((e) => {
     
        if (e.every((wincon) => xUser.includes(wincon))) {
            alert('X won');
            setTimeout(()=>window.location.reload(), 3000)
        } else
        if (e.every((wincon) => oUser.includes(wincon))) {
            
            alert('O won');
            setTimeout(()=>window.location.reload(), 3000)
            
        };
 })
}
id1.onclick=()=> onClick(id1);
id2.onclick=()=> onClick(id2);
id3.onclick=()=> onClick(id3);
id4.onclick=()=> onClick(id4);
id5.onclick=()=> onClick(id5);
id6.onclick=()=> onClick(id6);
id7.onclick=()=> onClick(id7);
id8.onclick=()=> onClick(id8);
id9.onclick=()=> onClick(id9);










