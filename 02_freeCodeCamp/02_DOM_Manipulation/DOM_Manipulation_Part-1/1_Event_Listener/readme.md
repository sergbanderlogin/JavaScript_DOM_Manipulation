# DOM Manipulation Part-1
## Event Listener

### element.addEventListener('click', function)
```javascript
const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
    alert('I also love JavaScript')
}
buttonTwo.addEventListener('click', alertBtn);
```
### Mouseover
```javascript
const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener('mouseover', changeBgColor);
```



