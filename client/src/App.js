import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DragDropFilesNew from "./components/DragDropFilesNew";
import Sidebar from "./components/Sidebar";

const App = () => {
    return (
      <BrowserRouter>

        <div className="App">
        <Sidebar />
        <Routes>

        <Route path="/" element={<DragDropFilesNew />}>
           
           </Route>  
           </Routes> 
         
      </div>
     
      </BrowserRouter>
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
