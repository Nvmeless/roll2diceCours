import React from "react";
import { TodoList } from "../organism";
import { Container } from "../atoms";

const Tasks = () => {
  return (
    <Container.Base>
      <TodoList></TodoList>
      <TodoList></TodoList>
    </Container.Base>
  );
};

export default Tasks;
