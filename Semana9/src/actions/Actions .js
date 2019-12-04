 import axios from 'axios'

 export const updateState = (id) => {
    return{
        type: 'UPDATE_STATE',
        payload: {
            id: id
        }
    }
}

export const updateStatesAll = (complite) => {
    return{
        type: 'UPDATE_STATES_ALL',
        payload: {
            complite: complite
        }
    }
}

export const deleteTask = (id) => {
    console.log('teste')
    return{
        type: 'DELETE_TASK',
        payload: {
            id: id
        }
    }
}

export const deleteAllCompliteTasks = () => {
    return{
        type: 'DELETE_ALL_TASKS',
    }
}

export const createNewTask = (newTask) => {
    return{
        type: 'CREATE_NEW_TASK',
        payload: {
            newTask: newTask
        }
    }
}

export const setTasks = Tasks => {
    return {
      type: "SET_TASKS",
      payload: {
        postsList: Tasks
      }
    };
  };


export const fetchList = () => async (dispatch, getState) => {
    const result = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:kelson/todos"
    );
    dispatch(setTasks(result.data.todos));
  };

  export const createNewTaskIdl = (task) => async (dispatch, getState) => {
    const data = task
    const result = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:kelson/todos", data
    );
    console.log(result)
    dispatch(fetchList());
  };

  export const updateStateIdl = (id) => async (dispatch, getState) => {
    const result = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:kelson/todos/${id}/toggle`
        );
    dispatch(fetchList());
  };

  export const deleteTaskIdl = (id) => async (dispatch, getState) => {
    const result = await axios.delete(
        `https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:kelson/todos/${id}`
        );
        console.log(result)
    dispatch(fetchList());
  };

  export const deleteAllCompliteTasksIdl = () => async (dispatch, getState) => {
    const result = await axios.delete(
        "https://us-central1-missao-newton.cloudfunctions.net/reduxTodo/:kelson/todos/delete-done"
    );
    dispatch(fetchList());
  };