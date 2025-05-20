import { configureStore, createSlice } from "@reduxjs/toolkit";
const tasks = [
  {
    id: 1,
    isDone: false,
    taskName: "Faire la vaisselle",
  },
  {
    id: 124,
    isDone: true,
    taskName: "Se Calcifier l'encephal",
  },
];

const todoSlice = createSlice({
  name: "todo",
  initialState: tasks,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        taskName: action.payload,
        isDone: false,
      };

      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find((x) => {
        console.log(x.id === action.payload, x);
        return x.id === action.payload;
      });
      console.log(task.isDone);
      task.isDone = !task.isDone;
    },
    deleteTask: (state, action) => {
      state = state.filter((x) => x.id !== action.payload);
      return state;
    },
  },
});

export const { toggleTask, addTask, deleteTask } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todoList: todoSlice.reducer,
  },
});
