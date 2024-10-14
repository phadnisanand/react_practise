import HigherOrderDemo from "./higherOrderDemo";
function ChildHigh(props) {
    const { show, handleclick } = props;

    return (
        <>
            <h3>child component 1</h3>
            <button onClick={handleclick}>increase
            </button>{show}
        </>
    )
}
export default HigherOrderDemo(ChildHigh);