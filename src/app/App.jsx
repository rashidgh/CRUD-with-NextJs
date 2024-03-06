import React from "react";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { ToastContainer, toast } from "react-toastify";
const App = async () => {
  return (
    <div className="max-w-2xl mx-auto mt-4 w-full flex flex-col items-center gap-2">
      <h3>Todo List App</h3>
      <AddTask />
      <TodoList />
      <ToastContainer />
    </div>
  );
};

export default App;
