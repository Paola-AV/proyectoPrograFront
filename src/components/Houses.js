import { BsFillHeartFill } from "react-icons/bs";

function Houses (){

    
    return(
        <section>
            <div>
                <div>
                    <img src="casa1.jpg" id="casa"/>
                </div>
                <div id="col">
                    <h3>Tittle</h3>
                    <div id="row">
                    <p>Location</p> 
                    <button id="favoriteBtn" ><BsFillHeartFill id="favIcon" /></button>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}

export default Houses;