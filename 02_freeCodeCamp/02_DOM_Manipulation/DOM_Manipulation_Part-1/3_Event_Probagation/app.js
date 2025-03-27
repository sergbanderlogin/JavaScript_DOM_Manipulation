// DOM Manipulation

// Event Probagtion

window.addEventListener("click", function () {
    console.log('window');
}, false);

document.addEventListener("click", function () {
    console.log('document');
}, false);

document.querySelector(".div2").addEventListener("click", function () {
    // e.stopPropagation()
    console.log('DIV-2');
}, {once: true});

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV-1');
}, false);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e);
}, false);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target);
}, false);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = 'clicked!');
}, false);


// цей приклад, щоб побачити різницю при додаванні властивості  e.preventDefault();


document.querySelector(".button").addEventListener("click", function (e) {
    e.preventDefault();
    console.log("=========== щоб побачити різницю =========== ")
    console.log(e.target.innerText = 'clicked Me!');
}, true);








