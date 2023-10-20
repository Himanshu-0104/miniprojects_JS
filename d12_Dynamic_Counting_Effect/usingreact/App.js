import React , { useEffect } from "react"
import  Reactdom from "react-dom/client"



const Func = ()=>{
    useEffect(() => {
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
}, []);


 return( 
    <>
        <div className="container">
           <div className="boxes">
                <div className="insta box">
                    <div className="counter" counttarget={450}>0000</div>
                    <span>Question Solved</span>
                    <div className="icon">
                        <i className="fab fa-instagram fa-3x" />
                        <small>Leetcode</small>
                    </div>
                </div>
                <div className="youtube box">
                    <div className="counter" counttarget={400}></div>
                    <span>Question Solved</span>
                    <div className="icon">
                        <i className="fab fa-youtube fa-3x" />
                        <small>Codeforces</small>
                    </div>
                </div>
                <div className="twitter box">
                    <div className="counter" counttarget={378}></div>
                    <span>Question Solved</span>
                    <div className="icon">
                        <i className="fab fa-twitter fa-3x" />
                        <small>GeeksforGeeks</small>
                    </div>
                </div>
           </div>
        </div>

    </>
 )
};









const root = Reactdom.createRoot(document.getElementById('root'));
root.render(<Func/>);