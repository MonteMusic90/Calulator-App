var sumAmount = document.getElementById("sumAmount");
var demo = document.getElementById("demo");
var equal = document.getElementById("equal").value;

function clear_All() {
    document.getElementById("sumAmount").value = ""
}

function btn_0() {
    document.getElementById("sumAmount").value += 0
    
}
function btn_1() {
    document.getElementById("sumAmount").value += 1
}
function btn_2() {
    document.getElementById("sumAmount").value += 2
}
function btn_3() {
    document.getElementById("sumAmount").value += 3
}
function btn_4() {
    document.getElementById("sumAmount").value += 4
}
function btn_5() {
    document.getElementById("sumAmount").value += 5
}
function btn_6() {
    document.getElementById("sumAmount").value += 6
}
function btn_7() {
    document.getElementById("sumAmount").value += 7
}
function btn_8() {
    document.getElementById("sumAmount").value += 8
}
function btn_9() {
    document.getElementById("sumAmount").value += 9
}

function btn_Decimal() {
    document.getElementById("sumAmount").value +="."
}

function btn_Multiply() {
    
    document.getElementById("sumAmount").value += "*";
}

function btn_Subtraction() {
    
    document.getElementById("sumAmount").value += "-";
}
function btn_Divide() {
    
    document.getElementById("sumAmount").value += "/";
}

function btn_Add() {
    
    document.getElementById("sumAmount").value += "+";
}


function btn_Equal() {
   var x =  sumAmount.value;
   var y = eval(x);
   document.getElementById("sumAmount").value = y;
   
}