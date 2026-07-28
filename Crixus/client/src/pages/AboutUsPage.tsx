import "../styles/AboutUsPage.css";

function AboutUsPage(){

    return(
        <section className="about-us-view">
            <div className="about-crixus">
                    <h2>The Making of Crixus</h2>
                    <p>
                        &emsp;&emsp;<strong>What is Crixus: </strong>Crixus is a General Manager style mode of a the roman colosseum. Creating fighters arming them with weapons and armor. Fight one vs one or
                        in teams, fighting npcs where your fighters attributes play a major role in the outcome of each fight. Will you make the next Maximus Decimus Meridius
                        or will you be defeated by him?<br/> 
                        &emsp;&emsp;<strong>The Making of Crixus: </strong> This web game was created by three college students at Conestoga College 'Waterloo'. A simple project
                        turned into a real life managment sim of scope. Where wild ideas clash with execution, Crixus is and always will be just a fun way to show off
                        our skills that we have, will, and are learning.
                    </p>
                </div>
            <div className="kb-section">
                
                <div className="student-name">
                    <h3>Kenneth Barclay</h3>
                </div>
                <div className="detail-section-a">
                    <h3>About:</h3>
                    <p>
                        
                    </p>
                    <h4>Contributions:</h4>
                    <ul>
                        <li>Database</li>
                        <li>Objects</li>
                        <li>UPDATE Fighter</li>
                    </ul>
                </div>
            </div>
            <div className="as-section">
                <div className="detail-section-b">
                    <h3>About:</h3>
                    <p>
                        Software Development is his second career, coming from the skilled trades in HVAC. The passion that fits like a glove. The ability to 
                        continue stretching his creativity by building things if the digital world instead of the physical. Self driven and a knack for leadership, and 
                        mentorship. This miniature capstone project was a way for him to get out of his comfort zone of backend development and go headlong into the
                        React libraries and CSS. To see more of his work visit <a href="https://wrenchwebdesigns.com/">wrenchwebdesigns.com</a>
                    </p>
                    <h4>Contributions:</h4>
                    <ul>
                        <li>Frontend Design</li>
                        <li>React Implementation</li>
                        <li>GET(s) for Armory</li>
                        <li>New Fighter POST</li>
                    </ul>
                </div>
                <div className="student-name">
                    <h3>Alexander Sturgeon</h3>
                </div>
                
            </div>
            <div className="gs-section">
                <div className="student-name">
                    <h3>Gurkirat Singh</h3>
                </div>
                <div className="detail-section-a">
                    <h3>About:</h3>
                    <p>

                    </p>
                    <h4>Contributions:</h4>
                    <ul>
                        <li>Rest API</li>
                        <li>API Architecture</li>
                        <li>View Fighter GET &amp; DELETE</li>
                    </ul>
                </div>
            </div>
        </section>

    )
}

export default AboutUsPage;