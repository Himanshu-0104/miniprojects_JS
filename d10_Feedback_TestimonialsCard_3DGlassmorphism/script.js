VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 20,
    speed: 400,
    glare: true,
    transition: true,
    reverse: true,
});

const contentptext = document.querySelectorAll(".contentptext");
const box = document.querySelectorAll('.box');




function func(element,ptextt){
    const pwords = ptextt.split(/\s+/);
    if (pwords.length > 30) {
    const words = ptextt.split(' ').slice(0, 30); //taking only 30words 
    element.textContent = words.join(' ') + '...';
    }
} 



const ptext=[]; //content not changable 
document.addEventListener("DOMContentLoaded",()=> {
    
    //saving text content //how i store array of string
    contentptext.forEach((element)=>{ ptext.push(element.textContent)}); 
    // console.log(ptext[1]+"ptext");
    
    //decreasing size of extra text
    contentptext.forEach((element)=>{
        // console.log(element + "ehy");
        let ptextt = element.textContent;
        func(element,ptextt);
    })

    //adding removing class on hover
    box.forEach((element,idx)=>{
        // console.log(box +"box");
        const elequotion = document.querySelectorAll('.elequotion');
        const elecontent = document.querySelectorAll('.elecontent');
        element.addEventListener('mouseover',()=>{
            elequotion[idx].classList.add('elements');
            elecontent[idx].classList.add('contenthover');
            contentptext[idx].textContent=ptext[idx];
            });
            
        element.addEventListener('mouseout',()=>{
            elequotion[idx].classList.remove('elements');
            elecontent[idx].classList.remove('contenthover');
            func(contentptext[idx],ptext[idx]);
            });


    })
    

})






