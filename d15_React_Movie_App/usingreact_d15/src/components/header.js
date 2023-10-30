import React, { useState } from "react";
import { SEARCH_URL } from "../constants";


function Header({apicall}){

  const [inputvalue, setinputvalue] = useState("");
  const [logged , setlogged] = useState(false); //LogIn LogOut

  function eventlistener(event){
    if(event.key=="Enter" && event.keyCode==13){
        event.preventDefault();
        if(inputvalue!=''){
            apicall(SEARCH_URL+inputvalue+'"'); /* calling API */
            console.log("inputvalue: " + inputvalue);

            setinputvalue('');
        }
        else{
            window.location.reload()
        }
    }
};

    return(
        <>
          <header>
             <ul className="Navbarul">
                <li><a href="/d11_MenuButton_Animation/index.html" className="">Home<div className="" style={{  }}></div></a></li>
       
                <li><a href="#" className="nava">Work<div className="" style={{width: "38px"}}></div></a></li>
                
                <li><a href="#" className="nava">About<div className="" style={{width: "46px"}}></div></a></li>
                
                <li><a href="#" className="nava">Resume<div className="" style={{width: "62px"}}></div></a></li>
            </ul>


            <input type="text" className="search" placeholder="Search" onKeyDown={eventlistener} value={inputvalue}
              onChange={(event)=>{setinputvalue(event.target.value)}}
            />
            <div>
              { logged ?
                         <button onClick={()=>{setlogged(false)}}>LogOut</button> 
                       :
                         <button onClick={()=>{setlogged(true)}} >LogIn</button>
              }             
            </div>
          </header>
      
        
        </>
    )
}


export default Header;