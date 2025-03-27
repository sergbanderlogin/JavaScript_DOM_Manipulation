# DOM Manipulation
### getElementById()
```javascript
const title = document.getElementById('main-heading');
console.log(title);
```

### getElementClassName()
```javascript
const listItem = document.getElementsByClassName('list-items');
console.log(listItem);
```

### getElementsByTagsName()
```javascript
const listItem = document.getElementsByTagName('li');
console.log(listItem);
```

### querySelector()
```javascript
const container = document.querySelector('div');
console.log(container);
```

### querySelectorAll()
```javascript
const container = document.querySelectorAll('div');
console.log(container);
```

# DOM Manipulation

## Styling Elements

```javascript
const title = document.querySelector('#main-heading');
title.style.color = 'red';
console.log(title);
```
```javascript
const listItems = document.querySelectorAll('.list-items');

for (let i = 0; i < listItems.length; i++) {
listItems[i].style.fontSize = '5rem';
}

console.log(listItems);
```

## Creating Elements

```javascript
const ul =document.querySelector('ul');
const li =document.createElement('li');
```

#### Adding Elements
```javascript
ul.append(li)
```

#### Modifying the text
```javascript
const firstListItems = document.querySelector('.list-items');

console.log(firstListItems);
console.log(firstListItems.innerText);
console.log(firstListItems.textContent);
console.log(firstListItems.innerHTML);
```
```javascript
li.innerText = 'X-men';
```

### Modifying Attributes & Classes
```javascript
li.setAttribute('id', 'main-heading');
li.removeAttribute('id');

const title = document.querySelector('#main-heading');

console.log(title.getAttribute('id'));
```
```javascript
li.classList.add('list-items');
console.log(li.classList.contains('list-items'));
```
```javascript
li.classList.remove('list-items');
console.log(li.classList.contains('list-items'));
```
### Remove Elements
```javascript
li.remove();
```

============================<br/>
----------------------------<br/>
============================<br/>

## Traverse the DOM

### Parent Node Traversal
```javascript
let ul = document.querySelector('ul');
console.log(ul);
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);
```
```javascript
const html = document.documentElement;
console.log(html);
console.log(html.parentNode);
console.log(html.parentElement);
```

### Child Node Traversal
```javascript
let ul = document.querySelector('ul');
```
```javascript
console.log(ul);
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);

ul.childNodes[1].style.backgroundColor = 'blue';
```
```javascript
console.log(ul);
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
```
### Sibling Node Traversal
```javascript
let ul = document.querySelector('ul');
```
```javascript
const div = document.querySelector('div');
```
```javascript
console.log(div.childNodes);
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
```
```javascript
console.log(ul);
console.log(ul.previousSibling);
console.log(ul.nextSibling);
```
============================<br/>
----------------------------<br/>
============================<br/>













































