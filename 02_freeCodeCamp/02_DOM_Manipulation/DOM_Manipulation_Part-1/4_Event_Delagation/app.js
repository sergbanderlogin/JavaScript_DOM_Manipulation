// DOM Manipulation

// Event Delegation

// It allows users to append a SINGLE event listener to a parent element that adds it to all of its present AND future descendants that match a selector.
// Це дозволяє користувачам додавати одного слухача події батьківському елементу, який додає його до всіх його теперішніх та майбутніх нащадків, які відповідають селектором.

document.querySelector('#sports').addEventListener('click', (e) => {
    console.log(e.target.getAttribute('id') + ' is clicked');

    const target = e.target;

    if (target.matches('li')) {
       target.style.backgroundColor = 'orange';
    }
})

const sports = document.querySelector('#sports');
const newSports = document.createElement('li');

newSports.innerText = 'rugby';
newSports.setAttribute('id', 'rugby');

newSports.innerText = 'hockey';
newSports.setAttribute('id', 'hockey');

sports.appendChild(newSports);











