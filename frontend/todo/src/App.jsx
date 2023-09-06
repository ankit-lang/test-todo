import { useEffect, useState } from "react";
import Todocomponent from "./components/Todocomponent";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState();
  const [updating, setUpdating] = useState(false);
  const [todoid, settodoid] = useState("");
  const [updateui,setupdateui]  = useState(false)
  useEffect(() => {
    getAllTodo(setTodo);
  }, [updateui]);

  const updateMode = (_id, text) => {
    console.log(text,"updatemode")
    setUpdating(true);
    setText(text);
    settodoid(_id);
    updateTodo(  todoid,
      text,
      setupdateui,
      setTodo,
      setText,
      setUpdating)
  };
  return (
    <div className="app">
      <div className="container">
        <h1>TODO APP</h1>
        <div className="top">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            name=""
            id=""
            placeholder="Add Todo"
          />
          <div
            className="add"
            onClick={
              updating
                ? () => updateTodo(todoid, setupdateui, text, setText, setUpdating)
                : () => addTodo(text, setTodo, setText,setupdateui) 
            }
          >
            {updating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
        
          {
       
            todo &&
            todo.map((item) => (
              <Todocomponent
                key={item._id}
                deleteTodo={()=> deleteTodo(item._id,setupdateui)}
                updateMode={()=>updateMode(item._id, item.text)}
                text={item.text}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
