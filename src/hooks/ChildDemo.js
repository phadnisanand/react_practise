import { memo } from "react";
function ChildDemo({ todos, addTodo }) {
    console.log('child component calling');

    return (
        <>
            child component
            <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>

            {/* <input type="button" name= "click" value="click" onClick={props.handleClick} /> */}
        </>
    )
}
 export default memo(ChildDemo)  ;

