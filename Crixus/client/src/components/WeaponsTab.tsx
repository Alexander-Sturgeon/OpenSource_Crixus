import ItemCard from "./ItemCard";

function ArmoryTab(){

    return(
        <div>
            <div className="home-tool-highlights">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </div>
            <div className="item-table-container">
                <table className="item-table">
                    <thead>
                        <tr className="item-table-header">
                            <th>Name</th>
                            <th>Type</th>
                            <th>Damage</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <p>test</p>
                            </td>
                            <td>
                                <p>test</p>
                            </td>
                            <td>
                                <p>test</p>
                            </td>
                            <td>
                                <p>test</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ArmoryTab;