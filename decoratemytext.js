/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

window.onload = function(){
    var btn = document.getElementById("big");
    var bx = document.getElementById("box");
    var btnPigLat = document.getElementById("biglatin");
    //btn.onclick = myAlert;
    btn.onclick = byTime;
    bx.onchange = boldIt;
    btnPigLat.onclick = toPigLatin;
};

//function myAlert(){
//alert("Hello, world!");
//}

function changeSize(){
    var text = document.getElementById("text");
    var style = window.getComputedStyle(text,null).getPropertyValue('font-size');
    var currentSize = parseInt(style);
    console.log(currentSize);
    var newSize = currentSize + 2;
    console.log(newSize);
    text.style.fontSize = newSize + "pt";

}

function boldIt(){
    var text = document.getElementById("text");
    text.style.fontWeight = "bold";
    text.style.color = "green";
    text.style.textDecoration = "underline";
    document.body.style.backgroundImage="url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";
}

var timer = null;
function byTime(){
    if(timer === null){
        timer = setInterval(changeSize, 2000);
    }
    else{
        clearInterval(timer);
        timer = null;
    }
}

function toPigLatin(){
    var text = document.getElementById("text");
    var res = text.value.split(" ");
    console.log(res.length);
    for(var i in res){
        if(res[i].charAt(0) !== "a" && res[i] !== "A" && res[i].charAt(0) !== "e" && res[i] !== "E" && res[i].charAt(0) !== "i" && res[i] !== "I" && res[i].charAt(0) !== "o" && res[i] !== "O" && res[i].charAt(0) !== "u" && res[i] !== "U"){
            if(res[i].charAt(0) === "a" && res[i] === "A" && res[i].charAt(0) === "e" && res[i] === "E" && res[i].charAt(0) === "i" && res[i] === "I" && res[i].charAt(0) === "o" && res[i] === "O" && res[i].charAt(0) === "u" && res[i] === "U"){
                //text.innerHTML = res[i].substr(1,res[i].length - 1) + res[i].substr(res[i].length-1,res[i].length   ) + "ay";
                text.innerHTML = res[i].substr(1,4);
            }
        }
    }
    console.log(text);
}