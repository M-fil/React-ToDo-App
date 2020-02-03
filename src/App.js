import React, { useState, createContext } from 'react';

import ToDoForm from "./ToDoForm";
import ToDoList from './ToDoList';
import useToDo from "./useToDo";
import ToggleThemeButton from "./ToggleThemeButton";
import LeftSideBlock from "./LeftSideBlock";

const themes = {
  dark: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#e8eaed",
  },
  light: {
    color: "#e8eaed",
    backgroundColor: "rgb(40, 44, 52)",
  },
  red: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#f28b82",
  },
  orange: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fbbc04",
  },
  yellow: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fff475",
  },
  purple: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#d7aefb",
  },
  pink: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fdcfe8",
  },
  blue: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#aecbfa",
  },
  skyblue: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#cbf0f8",
  },
  brown: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#e6c9a8",
  },
}

export const ThemeContext = createContext(themes.light); 

function App () {
  const [isFormShown, setIsFormShown] = useState(true);
  const [isDark, setIsDark] = useState(false);

  const showTaskForm = () => {
      setIsFormShown(!isFormShown);
  }

  const changeTheme = () => {
    setIsDark(!isDark);

    isDark 
      ? document.body.style.backgroundColor = themes.light.color
      : document.body.style.backgroundColor = themes.dark.color;
  }

  const {
    taskData,

    onChangeHandler,

    addTask,
    deleteTask1,
    deleteTask2,
    deleteTask3,
    deleteTask4,

    textRef,
    deadlineRef} = useToDo();

    const themeColor = isDark ? themes.light.color : themes.dark.color;
    
  return (
      <div>
        <ThemeContext.Provider value = {isDark ? themes.light : themes.dark}>
          <LeftSideBlock 
            showTaskForm = {showTaskForm}
            isFormShown = {isFormShown}
          >
            {isFormShown ? (
              <ToDoForm 
                text = {taskData.currentTask.text}
                deadline = {taskData.currentTask.deadline}
                importance = {taskData.currentTask.importance}
                addTask = {addTask}
                TextHandleInput = {onChangeHandler}
                deadlineHandleInput = {onChangeHandler}
                importanceHandleInput = {onChangeHandler}
                textRef = {textRef}
                deadlineRef = {deadlineRef}
              /> 
            ) : null}
          </LeftSideBlock>
          }

          <div id = "squares">
            <ToggleThemeButton 
              changeTheme = {changeTheme} 
              isDark = {isDark} 
            />
            <h1 
              style = {{color: themeColor}}
            >
              ToDo App
            </h1>
            <ToDoList 
              deleteTask1 = {deleteTask1}
              deleteTask2 = {deleteTask2}
              deleteTask3 = {deleteTask3}
              deleteTask4 = {deleteTask4}
              square1 = {taskData.tasks1}
              square2 = {taskData.tasks2}
              square3 = {taskData.tasks3}
              square4 = {taskData.tasks4}
            />
          </div>
        </ThemeContext.Provider>
      </div>
  );
}
export default App;
