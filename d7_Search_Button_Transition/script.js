const searchbox = document.querySelector('.searchbox');
const btn= document.querySelector('.btn');
const input= document.querySelector('.input')

let searchsuccess=2;


btn.addEventListener('click',()=>{
    
    if(input.value.length>0){ //just check for search success or failed ->if input last element is 1 then success else failed
        input.textContent=`${input.value}`;
        searchsuccess=input.value.slice(-1);
    }

    console.log(input.value +": inputvalue");
    console.log(input.value.slice(-1)+": trim value");
    const checkinput = input.value.trim(); 
    if(checkinput==''){
        searchbox.classList.toggle('onclick'); //toggle adds or removes both on click
        btn.style.backgroundColor='rgb(7, 169, 245)';
        input.style.borderColor='rgb(7, 169, 245)';
    } 
    input.focus();
    if(searchsuccess==1 && checkinput!=''){
        btn.style.backgroundColor='var(--searchsuccess)';
        input.style.borderColor='var(--searchsuccess)';
    }
    if(searchsuccess!=1 && checkinput!=''){
        btn.style.backgroundColor='var(--searchfailed)';
        input.style.borderColor='var(--searchfailed)';
    }

    setTimeout(() => {
    let interval_id=setInterval(() => {
        if(input.value.length==0 ){ //here i want if onclick class added and searchbox empty then just remove onclick class
            input.textContent=`${input.value}`;
            console.log("Settimeout "+input.value+" :<- inputvalue");
            input.value='';
            searchbox.classList.remove('onclick');
            btn.style.backgroundColor='rgb(7, 169, 245)';
            input.style.borderColor='rgb(7, 169, 245)';
            clearInterval(interval_id);
            } 
    },10000); //10 sec close if empty
    },5000); //5 sec delay

    
    
})

