import React, { useState } from "react";
import { Button, Todo } from "../molecules";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, toggleTask } from "../../store";
import { Container } from "../atoms";

const TodoList = () => {
  const tasks = useSelector((state) => {
    return state.todoList;
  });
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("Nouvelle tache");

  return (
    <Container.Base>
      <Todo.List>
        {tasks.map((x) => {
          return (
            <Todo.Task
              key={x.id}
              toggle={() => {
                dispatch(toggleTask(x.id));
              }}
              deleteTask={() => {
                dispatch(deleteTask(x.id));
              }}
              {...x}
            ></Todo.Task>
          );
        })}
      </Todo.List>
      <input
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      ></input>
      <Button.Default
        callBack={() => {
          dispatch(addTask(taskName));
        }}
      >
        Nouvelle Tache
      </Button.Default>
    </Container.Base>
  );
};

export default TodoList;
