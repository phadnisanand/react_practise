import React, { useRef } from "react";
function Unconcomp(props) {
    const inputRef = useRef(null);
   const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Name: ${inputRef.current.value}`);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name ="name"  ref= {inputRef}  />
                <input type="submit" name="submit" value="submit"/>
            </form>
        </>
    )
}
export default Unconcomp;