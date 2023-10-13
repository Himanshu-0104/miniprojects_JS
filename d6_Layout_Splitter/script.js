const left=document.querySelector('.left');
const right=document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter',()=>{container.classList.add('contlefthover')});
left.addEventListener('mouseleave',()=>{container.classList.remove('contlefthover')});
right.addEventListener('mouseenter',()=>{container.classList.add('contrighthover')});
right.addEventListener('mouseleave',()=>{container.classList.remove('contrighthover')});