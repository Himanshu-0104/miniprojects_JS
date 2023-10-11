const open = document.getElementById('open');
const close = document.getElementById('close');

const menuicon = document.querySelector('.menuicon')
const shownav = document.querySelector('.navbar')
const containerrotate = document.querySelectorAll('.container')
const contentrotate = document.querySelectorAll('.content')
const h1=document.querySelector('.seeanimation');

//scroll transition
const box=document.querySelectorAll('.box');
console.log(box.length+" :total no. pages ");


open.addEventListener('click',()=>{
    window.scrollY=storeposn;
    // console.log(typeof storeposn + storeposn);
    menuicon.classList.add('menutranslate');
    containerrotate.forEach((element)=>{element.classList.add('pagerotate');})
    contentrotate.forEach((element)=>{element.classList.add('contentpagerotate');})
    shownav.classList.add('navshow');
    h1.style.display = "block";  
    box.forEach((element)=>
    {
        element.classList.add('showtransition');
    })
    // scroll animation
    window.addEventListener('scroll',()=>{
        const transitionposn=window.innerHeight / box.length*4;
        box.forEach((element)=>{
            const boxtop= element.getBoundingClientRect().top;
            if( boxtop < transitionposn) {
                element.classList.add('boxshow')
            } else {
                element.classList.remove('boxshow')
            }
        })
    })
   
    
})

close.addEventListener('click',()=>{
    window.scrollY=storeposn;
    menuicon.classList.remove('menutranslate');
    containerrotate.forEach((element)=>{element.classList.remove('pagerotate');})
    contentrotate.forEach((element)=>{element.classList.remove('contentpagerotate');})
    shownav.classList.remove('navshow');
    h1.style.display = "none";
    box.forEach((element)=>{element.classList.remove('showtransition');}) 
    
})
let storeposn=0;
window.addEventListener('scroll',()=>{storeposn=window.scrollY;})
