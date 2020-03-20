import { ADD_TASK, DELETE_TASK, TOGGLE_TASK } from './tasksTypesTypes';

const  initialState = {
    tasks1: [],
    tasks2: [],
    tasks3: [],
    tasks4: [],
}

const tasksTypesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK: {
            switch (action.payload.importance) {
                case "I - Urgent Task" : return {
                    ...state,
                    tasks1: [action.payload, ...state.tasks1],
                }
                case "II - Important" : return {
                    ...state,
                    tasks2: [action.payload, ...state.tasks2],
                }
                case "III - For Later" : return {
                    ...state,
                    tasks3: [action.payload, ...state.tasks3],
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks4: [action.payload, ...state.tasks4],
                }
                default : return {...state};
            }
        }

        case DELETE_TASK: {
            switch(action.payload.importance) {
                case "I - Urgent Task" : return {
                    ...state,
                    tasks1: state.tasks1.filter(elem => action.payload.id !== elem.id),
                }
                case "II - Important" : return {
                    ...state,
                    tasks2: state.tasks2.filter(elem => action.payload.id !== elem.id),
                }
                case "III - For Later" : return {
                    ...state,
                    tasks3: state.tasks3.filter(elem => action.payload.id !== elem.id),
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks4: state.tasks4.filter(elem => action.payload.id !== elem.id),
                }
                default : return state;
            }
        }

        case TOGGLE_TASK: Object.values(state).map(tasks => {
            for (let task of tasks) {
                if (task.id === action.payload.id) {
                    console.log("+++", task);
                    task.checked = !task.checked;
                }
            }
        })

        default: return state;
    }
}

export default tasksTypesReducer;