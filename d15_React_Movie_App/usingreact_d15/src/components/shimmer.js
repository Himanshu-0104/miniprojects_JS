export const Shimmermovie = () =>{
    return(
        <main>
            <div className="outercontainer">
                <div className="container">
                    {Array(30).fill("").map((ele,index)=>(
                        <div key={index} className="shimmercardscontainer">
                            <div className="shimmermoviecard">
                               <div className="shimmerimg"></div>
                                <div className="shimmermovieinfo">
                                     <p className="shimmermovietitleone"></p>
                                     <p className="shimmermovietitletwo"></p>
                                    <span className="shimmermovierating "></span>
                                </div>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </main>

    )
}