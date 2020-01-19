import { useState, useRef } from 'react';
import shortid from 'shortid';

function useToDo() {
    const textRef = useRef();
    const deadlineRef = useRef();

    const [taskData, setTaskData] = useState({
        tasks1: [],
        tasks2: [],
        tasks3: [],
        tasks4: [],
        currentTask: {
            id: "",
            text: "",
            deadline: "",
            importance: "I - Urgent Task"
        }
    });

    const onChangeHandler = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    const currentTask = {
        ...taskData.currentTask,
        id: shortid.generate(),
        [name]: value,
    }
    setTaskData({
        ...taskData,
        currentTask,
    });
    }

    const addTask = (event) => {
        event.preventDefault();

        const currentTask = {
            id: "",
            text: "",
            deadline: "",
            importance: taskData.currentTask.importance
        }

        if (taskData.currentTask.text !== "") {
            switch(taskData.currentTask.importance) {
                case "I - Urgent Task" :
                    setTaskData({ ...taskData ,tasks1: [taskData.currentTask, ...taskData.tasks1], currentTask: currentTask });
                    break;
                case "II - Important" :
                    setTaskData({ ...taskData ,tasks2: [taskData.currentTask, ...taskData.tasks2], currentTask: currentTask });
                    break;
                case "III - Unimportant Task" :
                    setTaskData({ ...taskData ,tasks3: [taskData.currentTask, ...taskData.tasks3], currentTask: currentTask });
                    break;
                case "IV - Useless Task" :
                    setTaskData({ ...taskData ,tasks4: [taskData.currentTask, ...taskData.tasks4], currentTask: currentTask });
                    break;
                default : return taskData;
            }
        }

        textRef.current.value = "";
        deadlineRef.current.value = "";
    }

    const deleteTask1 = (id) => {
        const tasksWithDeletedItem = taskData.tasks1.filter(item => {
            return item.id !== id;
        });

        setTaskData({
            ...taskData,
            tasks1: tasksWithDeletedItem,
        });
    }

    const deleteTask2 = (id) => {
        const tasksWithDeletedItem = taskData.tasks2.filter(item => {
            return item.id !== id;
        });

        setTaskData({
            ...taskData,
            tasks2: tasksWithDeletedItem,
        });
    }

    const deleteTask3 = (id) => {
        const tasksWithDeletedItem = taskData.tasks3.filter(item => {
            return item.id !== id;
        });

        setTaskData({
            ...taskData,
            tasks3: tasksWithDeletedItem,
        });
    }

    const deleteTask4 = (id) => {
        const tasksWithDeletedItem = taskData.tasks4.filter(item => {
            return item.id !== id;
        });

        setTaskData({
            ...taskData,
            tasks4: tasksWithDeletedItem,
        });
    }

    return {
        taskData,

        onChangeHandler,

        addTask,
        deleteTask1,
        deleteTask2,
        deleteTask3,
        deleteTask4,

        textRef,
        deadlineRef,
    }
}

export default useToDo;
