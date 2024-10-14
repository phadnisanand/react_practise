import HigherOrderDemo from "./higherOrderDemo";
function ChildHigh2(props) {

    const { show, handleclick } = props;

    return (
        <>
            <h3>child component 2</h3>
            <button onClick={handleclick}>increase
            </button>{show}
        </>
    )
}
export default HigherOrderDemo(ChildHigh2);