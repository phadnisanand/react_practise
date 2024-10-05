import JsonData from './data.json';

function UnrelatedComp1(props) {

    const DisplayData= JsonData.map(
        (info)=>{
            return(
                <tr  key={info.id}>
                    <td>{info.id}</td>
                    <td>{info.name}</td>
                    <td>{info.city}</td>
                </tr>
            )
        }
    )
 
    return(
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th>Sr.NO</th>
                    <th>Name</th>
                    <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </table>
        </div>
    )
}
export default UnrelatedComp1