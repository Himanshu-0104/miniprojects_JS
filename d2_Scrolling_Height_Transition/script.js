const prev= document.getElementById('prev');
const next= document.getElementById('next');
const numbers = document.querySelectorAll('.number');
const chngheight=document.getElementById('lineprogress');

let counter=1;

function func(){
    if(counter==1) prev.disabled=true;
    else if(counter===numbers.length) next.disabled=true;
    else {
        prev.disabled=false;
        next.disabled=false;
    }

    numbers.forEach((element,idx)=>{ // by doing this we calculate current counter value ,gives no. of active present in all numbers nodelist
        if(idx<counter) element.classList.add('active');
        else element.classList.remove('active');
    });
    const actives=document.querySelectorAll('.active');
    chngheight.style.height= (actives.length-1)/(numbers.length-1)*100+"%"; //formula

}

prev.addEventListener('click',()=>{
   counter--;
   if(counter<1) counter=1;
//    console.log("prev: " +counter);
   func();
})

next.addEventListener('click',()=>{
    counter++;
    if(counter>numbers.length) counter=numbers.length;
    // console.log("next: " +counter);
    func()
})

window.addEventListener('scroll',()=>{ //start from 1000px to 1700px (height 700px)
    const curposn = window.scrollY;
    // console.log(scrollPosition);

    const startScroll = 1000;
    const endScroll = 5100; // i calculate using console.log
    ////1980 3000 3940 4900 -> 5100/total no. of numbers then gets each numbers position 
  
    if (curposn >= startScroll && curposn <= endScroll) {

        const heightRange = 700; // Height range from 0 to 700
        const scrolledDistance = curposn - startScroll;
        const newHeight = (scrolledDistance / (endScroll - startScroll)) * heightRange;
      chngheight.style.height = `${newHeight}px`;
    }
    //please write a logic so that LOC are less
    if(curposn<="700"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
        })
    }
    if(curposn>="1981"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
            numbers[0].classList.add('active');
            numbers[1].classList.add('active');
        })
    }
    if(curposn>="701" && curposn<="1980"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
            numbers[0].classList.add('active');
        })
    }
    if(curposn>="3000"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
            numbers[0].classList.add('active');
            numbers[1].classList.add('active');
            numbers[2].classList.add('active');
        })
    }
    if(curposn>="3940"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
            numbers[0].classList.add('active');
            numbers[1].classList.add('active');
            numbers[2].classList.add('active');
            numbers[3].classList.add('active');
        })
    }
    if(curposn>="4900"){
        numbers.forEach((element,idx)=>{
            element.classList.remove('active');
            numbers[0].classList.add('active');
            numbers[1].classList.add('active');
            numbers[2].classList.add('active');
            numbers[3].classList.add('active');
            numbers[4].classList.add('active');
            chngheight.style.height = "700px";
        })
    }
    else if (scrollPosition < startScroll) {chngheight.style.height = '0';} 
    else if (scrollPosition > endScroll) {chngheight.style.height = '700px';}
    
})

