// function Moviecard({moviedata}){ //destructing props here
// const {image,title,rating,votecount,overview} = moviedata; //destructing object here

import { IMAGE_URL,DUMMY_IMG } from "../constants";



function Moviecard({title ,poster_path ,vote_count ,vote_average ,overview ,adult, id}){ 


    function showvote(votes){
        if(votes>1000) return Math.round((votes/1000)*100)/100+"k";
        else if(votes<10) return "00"+votes;
        else if(votes>9 && votes<100) return "0"+votes;
        else return votes
        // votes >1000 ? return Math.round((votes/1000)*100)/100 :return votes; /*Ternery operator */
    }
    function getvotecolor(vote_average){
        if(vote_average>7) return "movierating green";
        else if (vote_average<5) return "movierating red";
        else return "movierating orange"
    }
    function getavgvote(vote_average){
        return Number.isInteger(vote_average)&&vote_average<10?vote_average+".0":(vote_average==10?vote_average+"." : vote_average.toFixed(1))
    }


    return(
        <div className="cardscontainer">
            <div className="moviecard">
                <img src={IMAGE_URL+ poster_path} onerror={DUMMY_IMG} alt={title}/>
                <div className="movieinfo">
                    <p className="movietitle">{title}</p>
                    <span className={getvotecolor(vote_average)}>{getavgvote(vote_average)}
                        <span className="votecount tag">Votes</span>
                        <span className="votecount totalvotes">{showvote(vote_count)}</span>
                    </span>
                </div>
                <div className="movOverview">
                    <span className="spanoverview">Overview</span>
                    <p>{overview}</p>
                </div>
            </div>
        </div>

    )

}

export default Moviecard;