import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Task from "./components/task";
import Head from "./components/head";
import List from "./components/list";
import  store  from "./redux/store";
import DeleteTask from "./components/deleteTask";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <Task />
        <List />
  
      </div>
    </Provider>
  );
}

export default App;
