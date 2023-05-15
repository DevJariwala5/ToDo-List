import React from "react";
import ToDo from "../components/ToDo";

const Home = ({
  text,
  setText,
  handleAddToDo,
  isUpdating,
  updateMode,
  toDo,
  setToDo,
  deleteToDo,
}) => {
  return (
    <div className="container">
      <h1>TO-DO List</h1>
      <div className="top">
        <input
          type="text"
          placeholder="Add ToDos..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="add" onClick={handleAddToDo}>
          {isUpdating ? "Update" : "Add"}
        </div>
      </div>
      <div className="list">
        {toDo.map((item) => (
          <ToDo
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteToDo={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
