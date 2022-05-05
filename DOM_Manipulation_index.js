console.log('Running script')

const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const p1 = document.querySelector('#p1')
const p2 = document.querySelector ('.p2')
const lis = document.querySelectorAll('li')

h1.style.fontFamily = 'Monospace'
h2.style.fontFamily = 'Monospace'
p1.style.backgroundColor = '#3498db'
p1.style.color = 'white'
p1.style.fontFamily = 'Roboto'
p1.style.padding = '10px'
p1.style.fontsize = '18px'
p2.style.backgroundColor = '#9b59b6'
p2.style.color = 'white'
p2.style.fontFamily = 'Roboto'
p2.style.padding = '10px'
p2.style.fontsize = '18px'

lis.forEach(li => {
    li.style.fontFamily = 'Monospace',
    li.style.fontSize = '18px'
})

const ul = document.querySelector('ul')
const div = document.querySelector('#comments')
const firstLi = document.querySelector('#one')
const secondLi = document.querySelector('#two')
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// console.log(ul.childElementCount);
// console.log(div.children);
// console.log(firstLi.parentElement);
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling);
// console.log(secondLi.parentElement);
//console.log(secondLi.previousElementSibling);

const body = document.querySelector('body')
console.log(body.lastElementChild.previousElementSibling);
console.log(body.script.div);

const firstPtaginComments = comments.firstElementChild;

firstPtaginComments.textContent = 'Hello'
firstPtaginComments.innerHTML = '<h4>HomePage</h4>'
console.log(firstPtaginComments);

comments.classList.add('test')

//const container = document.querySelector('#container')

//const h1 = document.createElement('h1')
//h1.textContent = 'Dynamic'

//container.appendChild(h1)
//console.log(h1)