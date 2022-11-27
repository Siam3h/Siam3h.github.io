const para = document.querySelector('.paragraph-work1');

function myFunc() {
    if (x.matches) {
        //if media query matches
        para.body.style.backgroundColor = "yellow";
    }
    else {
        para.body.style.backgroundColor = "pink";
    }
}

let x = window.matchMedia("(min-width: 700px)")

myFunc(x) //call listener function at run time

x.addEventListener(myFunc) //attach listener function on state changes

