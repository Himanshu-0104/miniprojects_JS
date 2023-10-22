import React, { useEffect, useState } from "react"
import Reactdom from "react-dom/client"



const Func =() =>{
    useEffect(()=>{
      const quote = document.querySelector('.quote');
      const quoteauthor = document.querySelector('.quoteauthor');
      const category = document.querySelector('.category');
      
      const quotebtn = document.querySelector('.quotebtn');
      
      
      quotebtn.disabled = false;
      
      
      quotebtn.addEventListener('click', func);
      
      
      async function func(){
          // const category = 'inspirational'
          const apiKey = 'fZsyKVhh0mIU8k3w5gsozw==PWKaIN369imlyKdI';
          const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category='+category.value;
      
          quotebtn.disabled=true;
      
          const temp = await fetch(apiUrl,{
              method: 'GET',
              headers: { 'X-Api-Key': apiKey},
              contentType: 'application/json',
              // success: function(result) {console.log(result);},
              // error: function ajaxError(jqXHR) {console.error('Error: ', jqXHR.responseText);}
          });
      
          const json = await temp.json();
      
          quote.innerText=json[0]?.quote;
          quoteauthor.innerText=json[0]?.author;
      
          quotebtn.disabled=false;
      }
      


    },[]);


  return(
    <>
      <div className="container">
          <h2 className="h2color">Quipster</h2>
          <p className="pcolor">- a playful and witty source of quotes.</p>
          <select className="category" name="cars">
          <option value="inspirational">Inspirational</option>
          <option value="intelligence">intelligence</option>
          <option value="success">success</option>
          <option value="learning">learning</option>
          <option value="knowledge">knowledge</option>
          <option value="happiness">happiness</option>
          <option value="humor">humor</option>
          <option value="health">health</option>
          </select>
          <div className="quote">
          Genius is one percent inspiration and ninety-nine percent perspiration.
          </div>
          <div className="quoteauthor">Thomas Edison</div>
          <button className="quotebtn">Quote Quest</button>
      </div>

    </>
  )
}

const root = Reactdom.createRoot(document.getElementById('root'));
root.render(<Func/>);