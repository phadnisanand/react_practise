import React, { useState }  from "react";
function Child(props) {
    const [ name, setName] = useState("");
    const handleChange = (e) => {
        setName(e.target.value);
        props.getData(e.target.value);
    }
    const handleSubmit= (e) => {
        e.preventDefault();
        alert(`Name: ${name}`);
    }
    return (
        <>
            {props.fullName} <br />
            My name is  {name}
            <form onSubmit={handleSubmit}>
                <input type="text" name ="name" value ={name} onChange={handleChange} />
                <input type="submit" name="submit" value="submit" />
            </form>
        </>
    )
}

export default Child;
