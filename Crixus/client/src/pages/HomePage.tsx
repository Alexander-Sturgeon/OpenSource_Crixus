import "../styles/HomePage.css";

import ItemCard from "../components/ItemCard";

function HomePage(){
    return(
        <div className="home-main">
            {/* Highlights */}
            <div className="home-highlights">
                <h2>Highlights</h2>
                <p>this sis pajfksjjsdfjgsjgkl;df ffdgodfgjdfl dfg;ldfgl;s;dlfgljdfg jdfgj;ldkjfglkjdflkglkdfj  pdjfgjdfgdkjfg;lkjdfg pdfjg;ljdflgjdlkfjg dfkg;kdfjg;ldjf;gkjdfkljg</p>
            </div>
            {/* Item Display */}
            <div className="home-tool-highlights">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
        </div>
    )
}

export default HomePage;