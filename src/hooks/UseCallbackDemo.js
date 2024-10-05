import { useState, useCallback } from "react";
import ChildDemo from "./ChildDemo";

function UseCallbackDemo(props) {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    //   };

    return (
        <>
        <ChildDemo  todos={todos} addTodo={addTodo} />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}
export default UseCallbackDemo;