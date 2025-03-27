## DOM Manipulation

#### Event Probagtion
```javascript
window.addEventListener("click", function () {
    console.log('window');
}, true);

document.addEventListener("click", function () {
    console.log('document');
}, true);

document.querySelector(".div2").addEventListener("click", function () {
    console.log('DIV-2');
}, true);

document.querySelector(".div1").addEventListener("click", function () {
    console.log('DIV-1');
}, true);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e);
}, true);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target);
}, true);

document.querySelector("button").addEventListener("click", function (e) {
    console.log(e.target.innerText = 'clicked!');
}, true);
```
- change to false
```javascript
window.addEventListener("click", function () {
    console.log('window');
}, false);

document.addEventListener("click", function () {
    console.log('document');
}, false);

document.querySelector(".div2").addEventListener("click", function (e) {
    e.stopPropagation()
    console.log('DIV-2');
}, false);

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
```
- and then return true
```javascript

```