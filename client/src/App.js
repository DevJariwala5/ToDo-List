import { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/HandleApi";

function App() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const handleAddToDo = () => {
    if (isUpdating) {
      updateToDo(toDoId, text, setToDo, setText, setIsUpdating);
    } else {
      addToDo(text, setText, setToDo);
    }
  };

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home
            text={text}
            setText={setText}
            handleAddToDo={handleAddToDo}
            isUpdating={isUpdating}
            updateMode={updateMode}
            setToDo={setToDo}
            toDo={toDo}
            deleteToDo={deleteToDo}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
