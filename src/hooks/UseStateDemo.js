import React, { useState } from 'react';
function UseStateDemo(props) {
    const [count, setCount] = useState(0);

    return (
        <>
         <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            </div>
            
        </>
    )
}
export default UseStateDemo;
