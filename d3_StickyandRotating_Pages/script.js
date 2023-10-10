const open = document.getElementById('open');
const close = document.getElementById('close');

const menuicon = document.querySelector('.menuicon')
const shownav = document.querySelector('.show')
const containerrotate = document.querySelectorAll('.container')
const contentrotate = document.querySelectorAll('.content')


open.addEventListener('click',()=>{
    window.scrollY=storeposn;
    // console.log(typeof storeposn + storeposn);
    menuicon.classList.add('menutranslate');
    containerrotate.forEach((element)=>{element.classList.add('pagerotate');})
    contentrotate.forEach((element)=>{element.classList.add('contentpagerotate');})
    shownav.classList.add('show');
})

close.addEventListener('click',()=>{
    window.scrollY=storeposn;
    menuicon.classList.remove('menutranslate');
    containerrotate.forEach((element)=>{element.classList.remove('pagerotate');})
    contentrotate.forEach((element)=>{element.classList.remove('contentpagerotate');})
    shownav.classList.remove('show');
})
let storeposn=0;
window.addEventListener('scroll',()=>{storeposn=window.scrollY;})
