

function ArenaPage(){
    
    return(
        <section className="arena-section">
            <div className="arena-body">
                <div className="arena-select">

                </div>
                <div className="arena-combat">
                    <div className="arena-details"></div>
                    <div className="arena-user-fighters"></div>
                    <div className="areana-npc-fighters"></div>
                </div>
            </div>

            <div className="arena-outcome">
                <div className="outcome-header"></div>
                <div className="outcome-result"></div>
                <div className="outcome-items"></div>
                <div className="outcome-money"></div>
            </div>
        </section>
    )
}

export default ArenaPage;