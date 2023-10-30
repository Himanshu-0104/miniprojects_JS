// https://api.themoviedb.org/3/movie/550?api_key=c2e4d2fde37581dbdb55d200fea604cb
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2e4d2fde37581dbdb55d200fea604cb

const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c2e4d2fde37581dbdb55d200fea604cb"
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=c2e4d2fde37581dbdb55d200fea604cb&query="'
const IMAGE_URL = "https://image.tmdb.org/t/p/w1280"


const search = document.querySelector('.search');
const container = document.querySelector('.container');

async function apicall(urlvar){
    try{
    const temp = await fetch(urlvar);
    if(temp.ok){
        const json = await temp.json();
        moviesdom(json.results);
    }
    else{
        alert("Failed API not OK");
    }
    }catch(error){
        alert("API request Error:");
    }
}

apicall(API_URL);

search.addEventListener('keydown',(event)=>{
    if(event.key=="Enter" && event.keyCode==13){
        event.preventDefault();
        if(search.value!=''){
            apicall(SEARCH_URL+search.value+'"');

            search.value='';
        }
        else{
            window.location.reload()
        }
    }
});

function showvote(votes){
    if(votes>1000) return Math.round((votes/1000)*100)/100+"k";
    else if(votes<10) return "00"+votes;
    else if(votes>9 && votes<100) return "0"+votes;
    else return votes
    // votes >1000 ? return Math.round((votes/1000)*100)/100 :return votes; /*Ternery operator */
}
function getvotecolor(vote_average){
    if(vote_average>7) return "green";
    else if (vote_average<5) return "red";
    else return "orange"
}
function getavgvote(vote_average){
    return Number.isInteger(vote_average)&&vote_average<10?vote_average+".0":(vote_average==10?vote_average+"." : vote_average.toFixed(1))
}


function moviesdom(results){
    container.innerHTML='';
    results.forEach((element) => {
        const {title ,poster_path ,vote_count ,vote_average ,overview ,adult} = element;
        const cardscontainer = document.createElement('div');
        cardscontainer.classList.add("cardscontainer");
        cardscontainer.innerHTML=`
            <div class="moviecard">
                <img src="${IMAGE_URL + poster_path}" alt="${title}">
                <div class="movieinfo">
                <p class="movietitle">${title}</p>
                <span class="movierating ${getvotecolor(vote_average)}">${getavgvote(vote_average)}
                    <span class="votecount tag">Votes</span>
                    <span class="votecount totalvotes">${showvote(vote_count)}</span>
                </span>
                </div>
                <div class="movOverview">
                    <span class="spanoverview">Overview</span>
                   <p>${overview}</p>
                </div>
            </div>
            
            `

        container.appendChild(cardscontainer);    
    });
};



