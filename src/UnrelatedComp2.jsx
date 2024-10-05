import React, { useState }  from "react";

function UnrelatedComp2(props) {
   const [state, setState] = React.useState({
    name: "",
    City: ""
  })
    const handleSubmit= (e) => {
        e.preventDefault();
        let datajson = {
            id: Math.floor(Math.random() * 9000000000) + 1,
            name: state.name,
            City: state.City
          };
        console.log(datajson);
       
    }
    const handleChange = (evt) => {
        setState({
            ...state,
            [evt.target.name]: evt.target.value
          });
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name ="name" value={state.name}  onChange={handleChange} />
                <input type="text" name ="City" value={state.City}  onChange={handleChange} />
                <input type="submit" name="submit" value="submit" />
            </form>
        </>
    )
}
export default UnrelatedComp2;
