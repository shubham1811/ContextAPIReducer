import React, { useReducer } from 'react';
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TodoContext from "./Context/TodoContext"
import todoReducer from "./Context/reducer";
import TodoForm from './Component/TodoForm';
import Todo from './Component/Todo';

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])
  return (<TodoContext.Provider value={{ todos, dispatch }}>
    <Container fluid>
      <Todo />
      <TodoForm />
    </Container>
  </TodoContext.Provider>)
}

export default App;
