let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let displayNum = document.getElementById("number"); 
let number = 0;

btnPlus.addEventListener("click", () => {
    number++;
    print(number);
});

btnMinus.addEventListener("click", () => {
    number--;
    print(number);
});

function print(number){
    displayNum.innerHTML = number;
}