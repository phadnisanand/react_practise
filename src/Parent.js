import React from "react";
import Child from "./Child";
function Parent(props) {
  const fullName = 'Anand Phadnis';
  const getData = (data) => {
    console.log(data);
  }
    return (
        <>
            <Child fullName={fullName} getData= {getData} />
        </>
    )
}
export default Parent;