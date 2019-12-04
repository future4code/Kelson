const initialState = {
    tasks: [{
        name: 'teste',
		state: false,
		id:  1
    }]
  };
  
  const Tasks = (state = initialState, action) => {
    let tasks
    switch (action.type) {
        case 'CREATE_NEW_TASK':
            const test = [action.payload.newTask, ...state.tasks,]
            return { ...state, tasks: test };
        
        case 'UPDATE_STATE':
            let updadeTask
            state.tasks.forEach(task => { if(task.id === action.payload.id) 
                                            updadeTask = task } )
            updadeTask ={name: updadeTask.name,
                        state: !updadeTask.state,
                        id: updadeTask.id}
             const tasksU =  state.tasks.filter(task => task.id !== action.payload.id)
             tasks = [...tasksU , updadeTask]
            return { ...state, tasks: tasks };
        
        case 'UPDATE_STATES_ALL':
            let taskscomplite
            if (action.payload.complite === false)
                taskscomplite = state.tasks.map(task => {task.state = true 
                                                              return task  } )
            else
                taskscomplite = state.tasks.map(task => {task.state = false
                return task  } )
                console.log(taskscomplite)
            return { ...state, tasks: taskscomplite};
        
        case 'DELETE_TASK':
            tasks =  state.tasks.filter(task => task.id !== action.payload.id)
            return { ...state, tasks: tasks };
        
        case 'DELETE_ALL_TASKS':
            tasks = state.tasks.filter(task => task.state === false)
            return { ...state, tasks : tasks }; 
        case "SET_TASKS":
            return { ...state, tasks: action.payload.postsList}
        
        default:
            return state;
    }
  };
  
  export default Tasks;