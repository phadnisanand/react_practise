import { useParams,useLocation } from "react-router-dom";

function UselocationDemo(props) {
    
    const { pathname, key } = useLocation();
    const { id } = useParams();
    return (
        <>
            {id} <br />
            {pathname}  
        </>
    )
}
export default UselocationDemo;