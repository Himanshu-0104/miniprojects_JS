const faqbtn= document.querySelectorAll('.faq');

faqbtn.forEach((element)=>{
    element.addEventListener('click',()=>{
        element.classList.toggle('active');
    });
});