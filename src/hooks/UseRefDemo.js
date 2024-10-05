import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

function UseRefDemo() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  const inputElement = useRef();
  const previousInputValue = useRef("");
  const focusInput = () => {
   // inputElement.current.focus();
   console.log(inputElement);
   inputElement.current.value = '123';
  };


  useEffect(() => {
    count.current = count.current + 1;
  });

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>

      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>

      <h2>Current Value: {inputValue}</h2>
      <h2>Previous Value: {previousInputValue.current}</h2>
      
    </>
  );
}
export default  UseRefDemo;