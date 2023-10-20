const storepanel=document.querySelectorAll('.panel');
let counter=3;

function chngbg(idx){
    const setbg = storepanel[idx].getAttribute('backcolor');
    document.body.style.backgroundColor = setbg;
}

function func(idx){
  counter=idx;
//   console.log("func: "+counter);
  storepanel.forEach((element)=>{element.classList.remove('active')}) //removes prev active class
  storepanel[counter].classList.add('active'); //adds acive to current pannel
  chngbg(counter);
}

storepanel.forEach((element,idx)=>{
  element.addEventListener('click',()=>{func(idx);});
}
);

document.addEventListener('keydown',(event)=>{
  if(event.key==='ArrowLeft')
    {
      counter=((counter-1)+storepanel.length)%storepanel.length;
      func(counter);
    }
  if(event.key==='ArrowRight')
    {
      func(counter);
      counter=(counter+1)%storepanel.length;
    }
});
setInterval(()=>{
    // console.log("Interval: ");
    func(counter);
    counter=(counter+1)%storepanel.length;
},9000);
