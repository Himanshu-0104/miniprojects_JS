import React, { useEffect, useState } from "react";
import { API_URL }from "../constants";
import { Shimmermovie } from "./shimmer";
import Moviecard from "./moviescard";
import Header from "./header";

function Body(){

    const [allmovies , setallmovies] = useState(""); //movies object through api
    const [isLoading, setIsLoading] = useState(false); // Search header shimmer

    useEffect(()=>{
         apicall(API_URL);
    },[]);

    async function apicall(urlvar){ // API call
        setIsLoading(true);
        try{
        const temp = await fetch(urlvar);
        if(temp.ok){
            const json = await temp.json();
            setallmovies(json?.results);
        }
        else{
            alert("Failed API not OK");
        }
        }catch(error){
            alert('API "catch" Error:');
        } finally {
            setIsLoading(false); 
          }
    }

    if (isLoading) {return <><Header/><Shimmermovie/></>;} // header + shimmer calling during Search
    if(!allmovies) { console.log("EarlyReturn");  //return null; //Early Return
    }

    return allmovies.length===0?(<Shimmermovie/>)
    :(
        // return(
        //     <Shimmermovie/>
        // )
        <> 
        <Header apicall={apicall} />
           <main>   {/*Shimmer Effect*/}
                <div className="outercontainer">
                    <div className="container">
                        {
                            allmovies.map((element)=>{
                                return <Moviecard {...element} key={element.id}/>
                            })
                        }
                    </div>
                </div>
             </main>  
        </>
    );
}

export default Body;


// when image not load show other image
// header hide , when i search like this jflskjslg
// fix: header call at App.js only 
// load more movies when i scroll