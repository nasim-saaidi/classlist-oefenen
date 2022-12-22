



console.log();



const myBtn = document.querySelector('.run');
myBtn.addEventListener('click', myFunction);

function myFunction() {
    let button1 = document.querySelector(".box");
    button1.classList.add("error");
}

const button = document.querySelector('.change');
button.addEventListener('click', twofunction);

function twofunction() {
    let button2 = document.querySelector(".box");
    button2.classList.remove("error");
}
