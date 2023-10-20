const counter = document.querySelectorAll('.counter');

counter.forEach((element)=>{
    element.innerText='0';

    function func(){

        const limit= +element.getAttribute('counttarget'); //to covert into number use + , bcz it uses to convert string to number when it use infront of string , my ques why it not appending here to limit variable
        const incr = limit/500;

        const temp = +element.innerText;
        if(temp<limit){
            element.innerText = `${Math.ceil(temp+incr)}`; // here adding to prev
            setTimeout(func, 1);
        }
        else{
            element.innerText=limit;
        }
    }
    func(); 
})