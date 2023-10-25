import React from "react";
import Reactdom from "react-dom/client"
import Ourapp from "./components/ourapp";


const Func = ()=>{
   return(
       <Ourapp/>
   )
}


const root = Reactdom.createRoot(document.getElementById('root'));
root.render(<Func/>); 