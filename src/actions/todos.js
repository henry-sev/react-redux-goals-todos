import API from "goals-todos-api"

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

function addTodo (todo) {
  return {
    type: ADD_TODO,
    todo,
  }
}

function removeTodo (id) {
  return {
    type: REMOVE_TODO,
    id,
  }
}

function toggleTodo (id) {
  return {
    type: TOGGLE_TODO,
    id,
  }
}

function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal,
  }
}

export function handleAddTodo(name, cb) {
  return (dispatch) => {
    return API.saveTodo(name, cb)
      .then((todo) => {
        dispatch(addTodo(todo));
        cb();
      })
      .catch(() => {
        alert("Sorry there is an error!");
      })
  }
}

export function handleDeleteTodo(todo) {
  return (dispatch) => {
    dispatch(removeTodo(todo.id));

    return API.deleteTodo(todo.id)
      .catch(() => {
        dispatch(addTodo(todo));
        alert("An error occurred. Try again");
      })
  }
}

export function handleToggleTodo (todo) {
  return (dispatch) => {
    dispatch(toggleTodo(todo.id));

    return API.saveTodoToggle(todo.id)
      .catch(() => {
        dispatch(toggleTodo(todo.id));
        alert("An error occurred. Try again");
      })
  }
}