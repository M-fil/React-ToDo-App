import { 
    ADD_TASK, 
    DELETE_TASK, 
    TOGGLE_TASK, 
    COMBINE_TASKS ,
    SORT_TASKS
} from './tasksTypesTypes';
import shortid from 'shortid';

const addTask = (text, deadline, importance) => {
    return {
        type: ADD_TASK,
        payload: {
            id: shortid.generate(),
            text,
            deadline,
            importance,
            checked: false,
        }
    }
}

const deleteTask = (id, importance) => {
    return {
        type: DELETE_TASK,
        payload: { id, importance },
    }
}

const toggleTask = (id, importance) => {
    return {
        type: TOGGLE_TASK,
        payload: { id, importance }
    }
}

const combineTasks = () => {
    return {
        type: COMBINE_TASKS,
    }
}

const sortTasks = (isDesc, importance = '') => {
    return {
        type: SORT_TASKS,
        payload: { isDesc, importance },
    }
}

export { addTask, deleteTask, toggleTask, combineTasks, sortTasks };