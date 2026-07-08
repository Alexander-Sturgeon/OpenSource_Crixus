//Styles
import Fighter from "../data/Fighter";
import "../styles/NewFighterPage.css";

//Data
import {useState} from 'react';

function NewFighterPage(){
    const [formData, setFormData] = useState<Fighter | null>(null);

    function handleChange(){};

    function handleSubmit(e: React.SubmitEvent){
        // const newFighter = new Fighter(formData);
    };


    return(
        <section>
            <div className="new-fighter-body">
                <form onSubmit={handleSubmit}>
                    <div className="new-fighter-img">
                        <optgroup>

                        </optgroup>
                    </div>
                    <div className="new-figther-form">

                    </div>
                    <div className="new-fighter-submit">

                    </div>
                </form>
                    
            </div>

        </section>
    )
}

export default NewFighterPage;