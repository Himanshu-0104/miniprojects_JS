const searchbox = document.querySelector('.searchbox');
const profile = document.querySelector('.profile');

const apiurl = "https://api.github.com/users/";
let inputstore;

async function apifunc(user){
    try{

        // const {json}= await axios(apiurl+user);  //using axios 
        const temp= await fetch(apiurl+user); 
        if(temp.ok){
        const json = await temp.json();
        inputstore=searchbox.value;
        searchbox.value="";
        createprofile(json);
        apirepofunc(user); //calling repo api
        }
        else{
            // createError(`${inputstore} NotFound`);
        }
    }
    catch(error){ /* i dont know why this works with axios only */
        // console.log(error);
        // if(errorr.response.status == 404 ){
        //     createError(`${inputstore} NotFound`);
        // }
    }

} 

async function apirepofunc(user){
    try{
        // const {json} = await axios(apiurl + user +'/repos?sort=created');  //using axios 
        const temp = await fetch(apiurl + user +'/repos?sort=created');
        if(temp.ok){
        const json = await temp.json();
        createRepositary(json);
        }else {
            // createError(`${inputstore} have NO repos`);
        }

    } catch(error){
        // console.log(error + "RepoError");    
    }
}

function eventlisterner(event){
    if(event.key=="Enter" || event.keyCode==13)
    {
        event.preventDefault();
        const temp = searchbox.value;
        if(temp){
            apifunc(temp);
        }
    }
}

function removeeventlisterner(event){
    console.log(event +" keydown event remove");

}

searchbox.addEventListener('keydown',eventlisterner);
searchbox.removeEventListener('keydown',removeeventlisterner);  //why removing this not working


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