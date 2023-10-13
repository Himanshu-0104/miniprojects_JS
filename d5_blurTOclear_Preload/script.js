const chngtext = document.querySelector('.loading');
const blurbg = document.querySelector('.bimage');

let counter=0;
let idinterval;


function func(){
    counter++;
    if(counter>99){
        clearInterval(idinterval);
    }
    // console.log(counter);
    chngtext.innerHTML=`${counter}%`;
    chngtext.style.opacity= scale(counter,0,100,1,0);
    blurbg.style.filter=`blur(${scale(counter,0,100,100,0)}px)`
}


const bgurl = getComputedStyle(blurbg).backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');// stores in bgurl only the url

const imgobject = new Image(); //creates a new image object
imgobject.src = bgurl; //sets the newobject src to the bgurl

imgobject.onload = function() { //This function is executed when the background image is fully loaded.

  console.log('Background image has loaded!');
  idinterval=setInterval(func, 40); //40milisecond
};



// Refference
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
