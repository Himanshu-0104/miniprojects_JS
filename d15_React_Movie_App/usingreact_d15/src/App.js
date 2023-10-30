import React from "react";
import Reactdom from "react-dom/client";
import Body from "./components/body";
import Header from "./components/header";
import Footer from "./components/footer";



function Applayout(){

  

    return(
        <>
          {/* <Header apicall={apicall}/> */}
          <Body/>  
          <Footer/>
        </>
    )
}

const root= Reactdom.createRoot(document.getElementById('root'));
root.render(<Applayout/>)
