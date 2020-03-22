import { 
    ADD_TASK, 
    DELETE_TASK, 
    TOGGLE_TASK, 
    COMBINE_TASKS,
    SORT_TASKS
} from './tasksTypesTypes';
import { sortSample } from '../../components/sorting/functions';

const initialState = {
    tasks1: [],
    tasks2: [],
    tasks3: [],
    tasks4: [],

    commonList: []
}

const tasksTypesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            switch (action.payload.importance) {
                case "I - Urgent Task" : return {
                    ...state,
                    tasks1: [ action.payload, ...state.tasks1 ],
                }
                case "II - Important" : return {
                    ...state,
                    tasks2: [ action.payload, ...state.tasks2 ],
                }
                case "III - For Later" : return {
                    ...state,
                    tasks3: [ action.payload, ...state.tasks3 ],
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks4: [ action.payload, ...state.tasks4 ],
                }
                default : return state;
            }
        }

        case DELETE_TASK: {
            const { id, importance } = action.payload;

            switch(importance) {
                case "I - Urgent Task" : return {
                    ...state,
                    tasks1: [ ...state.tasks1.filter(elem => elem.id !== id) ],
                }
                case "II - Important" : return {
                    ...state,
                    tasks2: state.tasks2.filter(elem => elem.id !== id),
                }
                case "III - For Later" : return {
                    ...state,
                    tasks3: state.tasks3.filter(elem => elem.id !== id),
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks4: state.tasks4.filter(elem => elem.id !== id),
                }
                default : return state;
            }
        }

        case TOGGLE_TASK: {
            const { id, importance } = action.payload;
            const returnUpdatedTasks = (tasks) => {
                return tasks.map(task => {
                    return task.id === id 
                    ? {
                        ...task,
                        checked: !task.checked
                    } 
                    : task;
                });
            }

            switch(importance) {
                case "I - Urgent Task" : {
                    return {
                        ...state,
                        tasks1: returnUpdatedTasks(state.tasks1),
                    }
                }
                case "II - Important" : {
                    return {
                        ...state,
                        tasks2: returnUpdatedTasks(state.tasks2),
                    }
                }
                case "III - For Later" : {
                    return {
                        ...state,
                        tasks3: returnUpdatedTasks(state.tasks3),
                    }
                }
                case "IV - Delegate to Another" : {
                    return {
                        ...state,
                        tasks4: returnUpdatedTasks(state.tasks4),
                    }
                }
                default : return state;
            }
        }

        case COMBINE_TASKS: return {
            ...state,
            commonList: [
                ...state.tasks1,
                ...state.tasks2,
                ...state.tasks3,
                ...state.tasks4,
            ],
        }

        case SORT_TASKS: {
            const { isDesc, importance } = action.payload;

            switch(importance) {
                case 'I - Urgent' : return {
                    ...state,
                    tasks1: sortSample(state.tasks1, isDesc)
                }
                case "II - Important" : return {
                    ...state,
                    tasks1: sortSample(state.tasks2, isDesc)
                }
                case "III - For Later" : return {
                    ...state,
                    tasks1: sortSample(state.tasks3, isDesc)
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks1: sortSample(state.tasks4, isDesc)
                }
                case '': return {
                    ...state,
                    commonList: sortSample(state.commonList, isDesc),
                };
                default: return state;
            }
        }

        default: return state;
    }
}

export default tasksTypesReducer;