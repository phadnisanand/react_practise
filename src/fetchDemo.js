import { useState, useEffect } from "react";
import useFetch from './hooks/useFetch';
function FetchDemo(props) {
    //const [data, setData] = useState(null);
    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");
  /*useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setData(data));
 }, []);*/

  return (
    <>
      {data &&
        data.map((item) => {
          return <p key={item.id}>{item.title}</p>;
        })}
    </>
  );
}
export default FetchDemo;