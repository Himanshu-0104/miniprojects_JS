import React, { useEffect, useState } from "react";


const Ourapp = ()=>{
    
    const apiurl ="https://api.github.com/users/";
    
    const [inputvalue, setinputvalue] = useState('');
    const [apicall, setapicall] = useState(''); // to make connection between onchange and useEffect 
    
    const profile = document.querySelector('.profile');
    
    useEffect(()=>{ //apicall  //runs after intial render and whenenver statevaraibles change

        async function apifunc(user){
            // console.log("in apifunc"); /*remove */
            try{
                const temp = await fetch(apiurl+user);
                if(temp.ok){
                const json = await temp.json();
                setinputvalue("");

                createprofile(json);
                apirepofunc(user); //calling api for repositary
                
                }else {
                    createError(`${inputvalue} NotFound`);
                }
            }catch(error){
               alert('catch (error) API not requested:', error); /*change */
            }
            // console.log("atlast in apifunc"); /*remove */
        }

       async function apirepofunc(user){
           try{
               const temp= await fetch(apiurl+user+"/repos?sort=created");
               if(temp.ok){
               const json =await temp.json();
               createRepositary(json);
               }else {
                   alert("repoAPI request failed"); /*chagne */
               }    
           }catch(error){ 
             alert('catch (error) repoAPI not requested:', error); /*change */
           }
       }

    apifunc(apicall); //calling api after useEffect called

    },[apicall]);


    function handleinput(event){
        setinputvalue(event.target.value);
    }

    function eventlisterner(event){
        if(event.key=="Enter" || event.keyCode==13)
        {
            event.preventDefault();
            // console.log("inside eventlisterner"); /*remove */
            if(inputvalue){
                setapicall(inputvalue);
            }
        }
    }
    // function removeeventlisterner(event){
    //     console.log(event +" keydown event remove"); /*remove */
    // }

    function createprofile(user){
        const profilehtml=` 
        <div class="profilecard">
            <div>
            <img class="profileimg" src="${user.avatar_url}" alt="${user.name}">
            </div>
            <div class="userinfo">
                <h2>${user.name}</h2>
                ${user.login} </br>id: ${user.id}
                <ul>
                <li>${user.public_repos}<strong>Repos</strong></li>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                </ul>
                <div class="repositary"></div>
            </div>
      </div>`
        profile.innerHTML=profilehtml;
    }
    function createError(msg){
        profile.innerHTML=`<div class="userinfo"><h3>${msg}</h3></div>`
    }

    function createRepositary(repovar){
        const repositary = document.querySelector('.repositary');
    
        repovar.forEach((element)=>{
            const repolink = document.createElement('a');
            repolink.classList.add('repos');
            repolink.href=element.html_url;
            repolink.target="_blank";
            repolink.innerText=element.name;
    
            repositary.appendChild(repolink);
        })
    }
   

  return(
    <>
        <div className="container">
        {/* <div>  */}
        <form> 
            <input className="searchbox" type="text" onChange={handleinput} value={inputvalue} onKeyDown={eventlisterner} placeholder="Search Github Repo..."/>
        </form>
        {/* </div>  */}

        <main className="profile"></main>

        </div>
    </>
  );

}

export default Ourapp;