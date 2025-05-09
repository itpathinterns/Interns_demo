import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Todo/TodoSlice";
import { Formik } from "formik";

const AddTodos = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ todo: "" }}
      onSubmit={(values, { resetForm }) => {
        if (!values.todo.trim()) return;
        dispatch(addTodo(values.todo));
        resetForm();
      }}
    >
      {({ handleChange, handleSubmit, values }) => (
        <form onSubmit={handleSubmit} className="flex gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter a Todo..."
            value={values.todo}
            onChange={handleChange("todo")}
            className="flex-1 bg-gray-700 rounded-lg border-2 border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/50 text-base outline-none text-gray-100 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Add Todo
          </button>
        </form>
      )}
    </Formik>
  );
};

export default AddTodos;
