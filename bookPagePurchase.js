// function fff(){
//     window.alert("jjjjjjjjjjj");
// }
// document.getElementById("idid").onclick =function(){window.alert("jjjjjjjjjjj");};
// let cl;
function check(idd) {
    if (window.localStorage.getItem(idd + "cart") == "T") {
        backColor("buy-button", "#579b5a");
    }
}
// cl = document.getElementsByClassName("buy-button");
// cl[0].onclick = buyBook(idd);
// console.log("out "+idd);
///////////
// document.getElementById(iddVar).onclick = function () {
//     let cl = document.getElementsByClassName("buy-button");
//     for (x = 0; x < cl.length; x++) {
//         cl[x].onclick=;
//     }
// }
function backColor(cll, color) {
    let cl = document.getElementsByClassName(cll);
    for (x = 0; x < cl.length; x++) {
        cl[x].style.backgroundColor = color;
    }
}
// function ()
// let cl = document.getElementsByClassName(cll);
//     for (x=0 ; x<cl.length;x++){
//         cl[x].style.backgroundColor = color;
//     }

function buyBook(iddd) {
    if (window.localStorage.getItem(iddd + "cart") == "T") {
        window.localStorage.removeItem(iddd + "cart");
        window.alert("You removed this book from your cart");
        backColor("buy-button", "#467ce0");
    } else {
        window.localStorage.setItem(iddd + "cart", "T");
        backColor("buy-button", "#579b5a");
    }
}

