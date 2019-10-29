const initialState = {
    tasks: []
  };
  
  const Tasks = (state = initialState, action) => {
    let tasks
    switch (action.type) {
        case 'CREATE_NEW_TASK':
            return { ...state, task: [ ...state.tasks, action.payload.newTask] };
        
        case 'UPDATE_STATE':
            let updadeTask = state.task.filter(task => task.id === action.payload.id)
            updadeTask.state = !updadeTask.state
            tasks =  state.task.filter(task => task.id !== action.payload.id)
            return { ...state, tasks: [...tasks , updadeTask] };
        
        case 'UPDATE_STATES_ALL':
            let taskscomplite
            if (action.payload.complite === false)
                taskscomplite = state.task.map(task => {task.state = true 
                                                              return task  } )
            else
                taskscomplite = state.task.map(task => {task.state = false
                return task  } )
            return { ...state, task: taskscomplite};
        
        case 'DELETE_TASK':
            tasks =  state.task.filter(task => task.id !== action.payload.id)
            return { ...state, task: [...tasks] };
        
        case 'DELETE_ALL_TASKS':
            tasks = state.task.filter(task => task.state === false)
            return { ...state, task : tasks }; 
        
        default:
            return state;
    }
  };
  
  export default Tasks;