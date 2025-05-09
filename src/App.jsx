import React from "react";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 mb-8">
          Todo App
        </h1>
        <div className="bg-gray-800 rounded-lg shadow-xl p-6">
          <AddTodos />
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;
