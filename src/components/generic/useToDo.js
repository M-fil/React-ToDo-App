import { useState, useRef, useEffect } from 'react';
import shortid from 'shortid';

function useToDo() {
    const textRef = useRef();
    const deadlineRef = useRef();

    const [currentTask, setCurrentTask] = useState({
        id: "",
        text: "",
        deadline: "",
        importance: "I - Urgent Task",
        checked: false,
    });

    const [taskData, setTaskData] = useState({
        tasks1: [],
        tasks2: [],
        tasks3: [],
        tasks4: [],
    });

    const [commonTaskData, setCommonTaskData] = useState([]);

    const onChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        const task = {
            ...currentTask,
            id: shortid.generate(),
            [name]: value,
            checked: false,
        }

        setCurrentTask(task);
    }

    const addTask = (event) => {
        event.preventDefault();

        if (currentTask.text !== "") {
            switch(currentTask.importance) {
                case "I - Urgent Task" :
                    setTaskData({ ...taskData ,tasks1: [currentTask, ...taskData.tasks1], });
                    break;
                case "II - Important" :
                    setTaskData({ ...taskData ,tasks2: [currentTask, ...taskData.tasks2], });
                    break;
                case "III - For Later" :
                    setTaskData({ ...taskData ,tasks3: [currentTask, ...taskData.tasks3], });
                    break;
                case "IV - Delegate to Another" :
                    setTaskData({ ...taskData ,tasks4: [currentTask, ...taskData.tasks4], });
                    break;
                default : return taskData;
            }
        }   
        
        textRef.current.value = "";
        deadlineRef.current.value = "";
    }

    useEffect(() => {
        setCommonTaskData(
            [
              ...taskData.tasks1,
              ...taskData.tasks2,
              ...taskData.tasks3,
              ...taskData.tasks4,
            ]
        );
    }, [taskData]);

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

    const deleteTaskFromCommonList = (id) => {
        const tasksWithDeletedItem = commonTaskData.filter(item => {
            return item.id !== id;
        });

        setCommonTaskData(tasksWithDeletedItem);

        const tasksWithDeletedItem1 = taskData.tasks1.filter(item => {
            return item.id !== id;
        });

        const tasksWithDeletedItem2 = taskData.tasks2.filter(item => {
            return item.id !== id;
        });

        const tasksWithDeletedItem3 = taskData.tasks3.filter(item => {
            return item.id !== id;
        });

        const tasksWithDeletedItem4 = taskData.tasks4.filter(item => {
            return item.id !== id;
        });

        setTaskData({
            ...taskData,
            tasks1: tasksWithDeletedItem1,
            tasks2: tasksWithDeletedItem2,
            tasks3: tasksWithDeletedItem3,
            tasks4: tasksWithDeletedItem4,
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

        deleteTaskFromCommonList,
        commonTaskData,
        setCommonTaskData,

        currentTask,
    }
}

export default useToDo;
