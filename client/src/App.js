import "./App.css";
//import SortableList from "./components/SortableList";
//import DragDropFiles from "./components/DragDropFiles";            <DragDropFiles />
import DragDropFilesNew from "./components/DragDropFilesNew";

const App = () => {
    return (
        <div className="container">
  
            <DragDropFilesNew />
        </div>
    )
};

export default App;

/*import React, { Fragment } from "react";
import "./App.css";

//components

import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </Fragment>
  );
}

export default App;*/
