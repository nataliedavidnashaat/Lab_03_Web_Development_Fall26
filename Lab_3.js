// alert("lab3");
// console.log("hello world");

// document.title = "Hello";

// document.body.style.backgroundColor = 'White';

// let h1 = document.getElementById('heading');

// function func1() {
//     h1.textContent = "Function 1";

// }
// function func2() {
//     h1.textContent = "function 2";
// }

////////////////////////////////////////////

let h2 = document.getElementById('heading2');
let show_btn = document.getElementById('show_btn');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');
let reset_btn = document.getElementById('reset_btn');

let cartQuantiy = 0;

btn1.addEventListener('click', () => addNtocart(1)); //() =>   This is an arrow function
btn2.addEventListener('click', () => addNtocart(2));
btn3.addEventListener('click', () => addNtocart(3));
show_btn.addEventListener('click', show);
reset_btn.addEventListener('click', reset);

document.getElementById('list').addEventListener('click', (e) => {
    if (e.target && e.target.nodeName === 'LI') {
        console.log('Clicked item:', e.target.textContent);
    }
});


function addNtocart(n) {
    cartQuantiy = cartQuantiy + n;
    h2.textContent = cartQuantiy;

}

function show() {
    h2.textContent = `Last Updated cart Quantiy is ${cartQuantiy}`;
}

function reset() {
    cartQuantiy = 0;
    h2.textContent = cartQuantiy;
}

// const list = document.getElementById('todo');
// const li = document.createElement('li');
// li.textContent = 'New item';
// list.appendChild(li);











