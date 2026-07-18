import "../styles/HomePage.css";
// import ItemCard from "../components/ItemCard";

//Image srced from pixabay by MARTINOPHUC
function HomePage(){
    return(
        <div className="home-main">
            {/* Highlights */}
            <div className="home-highlights">
                <h2 className="highlights-heading">Welcome to Crixus!</h2>
                <p className="highlights-p">Hello Lanista. Your arena awaits you. The Crixus arena is one of strength, virtue and glory. Create your fighters, arm and shield them. Than take your champions and pit them against others for the greatest rewards Rome has to offer. Become the Number one Lanista if you dare to try</p>
            </div>
            {/* Item Display */}
            <div className="home-tool-highlights">
                {/* <ItemCard/> */}
                {/* <ItemCard/> */}
                {/* <ItemCard/> */}
                <div className="tool-item-placeholder">
                    <p>Placeholder</p>
                </div>
                <div className="tool-item-placeholder">
                    <p>Placeholder</p>
                </div>
                <div className="tool-item-placeholder">
                    <p>Placeholder</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;