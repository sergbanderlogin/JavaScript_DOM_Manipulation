## DOM Manipulation

#### Event Delegation 

- It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
- Це дозволяє користувачам додавати одного слухача події батьківському елементу, який додає його до всіх його теперішніх та майбутніх нащадків, які відповідають селектором.

```javascript
document.querySelector('#football').addEventListener('click', (e) => {
    console.log("football is clicked");

    const target = e.target;

    if (target.matches('li')) {
       target.style.backgroundColor = 'orange';
    }
})

document.querySelector('#basketball').addEventListener('click', (e) => {
    console.log("basketball is clicked");

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'orange';
    }
})

document.querySelector('#boxing').addEventListener('click', (e) => {
    console.log("boxing is clicked");

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'orange';
    }
})

document.querySelector('#tennis').addEventListener('click', (e) => {
    console.log("tennis is clicked");

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'orange';
    }
})

document.querySelector('#golf').addEventListener('click', (e) => {
    console.log("golf is clicked");

    const target = e.target;

    if (target.matches('li')) {
        target.style.backgroundColor = 'orange';
    }
})
```
- then we change all this to
```javascript
document.querySelector('#sports').addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (target.matches('li')) {
       target.style.backgroundColor = 'orange';
    }
})
```
- added new child
```javascript
const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText = 'rugby';
newSports.setAttribute('id', 'rugby');

sports.appendChild(newSports);
```