let GetNumbers = document.querySelectorAll(".Numbers button"),
    view = document.querySelectorAll("h1")
const btn = document.querySelectorAll("button")
var numbers = []
var indexView = 0;

for(var index = 0; index<GetNumbers.length; index++)
{
    numbers[index] = index + 1
}

var num1 = 0, op = 0, num2 = 0;

var Digit = true;


//numeros
btn[0].onclick = () => {
    view[indexView].innerHTML += "7"
}
btn[1].onclick = () => {
    view[indexView].innerHTML += "8"
}
btn[2].onclick = () => {
    view[indexView].innerHTML += "9"
}
btn[3].onclick = () => {
    view[indexView].innerHTML += "4"
}
btn[4].onclick = () => {
    view[indexView].innerHTML += "5"
}
btn[5].onclick = () => {
    view[indexView].innerHTML += "6"
}
btn[6].onclick = () => {
    view[indexView].innerHTML += "1"
}
btn[7].onclick = () => {
    view[indexView].innerHTML += "2"
}
btn[8].onclick = () => {
    view[indexView].innerHTML += "3"
}
btn[9].onclick = () => {
    view[indexView].innerHTML += "0"
}
console.log(view)
//Igual
btn[12].onclick = () => {
    if(!view[0].innerHTML == "" && !view[1].innerHTML == "" && !view[2].innerHTML == "")
    {
        console.log(indexView)
        switch(view[1].innerHTML)
        {
            case "/": view[3].innerHTML = "=   " + (parseInt(view[0].innerHTML)/parseInt(view[2].innerHTML)); indexView = 0; break;
            case "*": view[3].innerHTML = "=   " + (parseInt(view[0].innerHTML)*parseInt(view[2].innerHTML)); indexView = 0; break;
            case "-": view[3].innerHTML = "=   " + (parseInt(view[0].innerHTML)-parseInt(view[2].innerHTML)); indexView = 0; break;
            case "+": view[3].innerHTML = "=   " + (parseInt(view[0].innerHTML)+parseInt(view[2].innerHTML)); indexView = 0; break;
        }
    }
}
//dividir
btn[11].onclick = () => {
    if(!view[0].innerHTML == "")
    {
        view[1].innerHTML = "/"
        indexView = 2
    }
    
}
//Mult
btn[13].onclick = () => {
    if(!view[0].innerHTML == "")
    {
        view[1].innerHTML = "*"
        indexView = 2
    }
}
//Sub
btn[15].onclick = () => {
    if(!view[0].innerHTML == "")
    {
        view[1].innerHTML = "-"
        indexView = 2
    }
}
//Somar
btn[14].onclick = () => {
    if(!view[0].innerHTML == "")
    {
        view[1].innerHTML = "+"
        indexView = 2
    }
}

//Limpar
btn[10].onclick = () =>{
    for(var index = 0; index<view.length; index++){
        view[index].innerHTML = ""
        console.log(index)
    }
}
