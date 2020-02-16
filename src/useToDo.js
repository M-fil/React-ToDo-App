import { useState, useRef, useEffect } from 'react';
import shortid from 'shortid';
//import useDeadlineSort from "./useDeadlineSort";

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
            importance: "I - Urgent Task",
            checked: false,
        }
    });

    /*const { sortSample, isDescSort } = useDeadlineSort();
    const sortByDeadline = useCallback(
        (array) => {
            sortSample(array, isDescSort);
        },
        [isDescSort, sortSample],
    )*/

    const [commonTaskData, setCommonTaskData] = useState([]);

    const onChangeHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        const currentTask = {
            ...taskData.currentTask,
            id: shortid.generate(),
            [name]: value,
            checked: false,
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
                case "III - For Later" :
                    setTaskData({ ...taskData ,tasks3: [taskData.currentTask, ...taskData.tasks3], currentTask: currentTask });
                    break;
                case "IV - Delegate to Another" :
                    setTaskData({ ...taskData ,tasks4: [taskData.currentTask, ...taskData.tasks4], currentTask: currentTask });
                    break;
                default : return taskData;
            }
        }    

        textRef.current.value = "";
        deadlineRef.current.value = "";
    }

    /*useEffect(() => {
        sortByDeadline(taskData.tasks1);
        sortByDeadline(taskData.tasks2);
        sortByDeadline(taskData.tasks3);
        sortByDeadline(taskData.tasks4);

    }, [taskData.tasks1, taskData.tasks2, taskData.tasks3, taskData.tasks4, sortByDeadline]);*/

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
    }
}

export default useToDo;
