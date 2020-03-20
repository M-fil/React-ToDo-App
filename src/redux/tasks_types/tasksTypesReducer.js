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
                default : return state;
            }
        }

        case DELETE_TASK: {
            switch(action.payload.importance) {
                case "I - Urgent Task" : return {
                    ...state,
                    tasks1: state.tasks1.filter(id => action.payload.id !== id),
                }
                case "II - Important" : return {
                    ...state,
                    tasks2: state.tasks2.filter(id => action.payload.id !== id),
                }
                case "III - For Later" : return {
                    ...state,
                    tasks3: state.tasks3.filter(id => action.payload.id !== id),
                }
                case "IV - Delegate to Another" : return {
                    ...state,
                    tasks4: state.tasks4.filter(id => action.payload.id !== id),
                }
                default : return state;
            }
        }

        case TOGGLE_TASK: return Object.values(state).map(tasks => {
            let findedTask = tasks.find(task => task.id = action.payload.id);
            findedTask.checked = !findedTask.checked;
        })

        default: return state;
    }
}

export default tasksTypesReducer;