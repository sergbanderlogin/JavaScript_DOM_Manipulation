console.log('DOM Manipulation. Project-3! Accordion.')

// Variable

const accordion = document.getElementsByClassName('content-container');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function()  {
        this.classList.toggle('active');
    })
}

