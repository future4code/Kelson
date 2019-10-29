 export const updateState = (id) => {
    return{
        type: 'UPDATE_STATE',
        paylaod: {
            id: id
        }
    }
}

export const updateStatesAll = (complite) => {
    return{
        type: 'UPDATE_STATES_ALL',
        paylaod: {
            complite: complite
        }
    }
}

export const deleteTask = (id) => {
    return{
        type: 'DELETE_TASK',
        paylaod: {
            id: id
        }
    }
}

export const deleteAllCompliteTasks = () => {
    return{
        type: 'DELETE_ALL_TASKS',
    }
}

export const createNewTask = (task) => {
    return{
        type: 'CREATE_NEW_TASK',
        paylaod: {
            newTask: task
        }
    }
}