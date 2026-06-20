import "../styles/ViewFighterPage.css";
import Fighter from "../data/Fighter";
interface FighterProp{
    fighter: Fighter;
}
function FighterCard({fighter}:FighterProp){
    return(
        <div className="fightercard-body">
            <img className="fightercard-image" src={fighter.appearance} alt="Fighter Image"></img>
            <div className="fightercard-details">
                <p><strong>{fighter.first_name} {fighter.last_name}</strong></p>
                <p>Salary: {fighter.salary}g</p>
            </div>
            
        </div>
    )
}

export default FighterCard;