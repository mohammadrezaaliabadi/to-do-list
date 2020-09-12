import React from "react";
import "./App.css";
import Footer from "../footer";
import AddTodo from "../addTodo";
import VisibleTodoList from "../../containers/visibleTodoList";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
