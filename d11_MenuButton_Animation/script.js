const nav=document.getElementById('nav');
const menubtn=document.querySelector('.menubtn');

const nava = document.querySelectorAll('.nava');
const lihover=document.querySelectorAll('.lihover');





document.addEventListener("DOMContentLoaded", ()=> {

    /* active for current page,same style as on hover in nav  */  
    nava.forEach((linkelement,idx)=>{
        linkelement.addEventListener('click',()=>{
            nava.forEach((element)=>{element.classList.remove('currentpageA')});
            lihover.forEach((element)=>{element.classList.remove('currentpage')});
            linkelement.classList.add('currentpageA');
            lihover[idx].classList.add('currentpage');
            console.log(nava);

        })
    });

    /*Menu button toggle*/
    menubtn.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })


  });

  
    
    