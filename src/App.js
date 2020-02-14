import React, { useState, createContext, useEffect } from 'react';

import ToDoForm from "./ToDoForm";
import ToDoList from './ToDoList';
import useToDo from "./useToDo";
import ToggleThemeButton from "./ToggleThemeButton";
import LeftSideBlock from "./LeftSideBlock";
import SwitchTasksListView from "./SwitchTasksListView";

const themes = {
  dark: {
    color: "#e8eaed",
    backgroundColor: "rgb(40, 44, 52)",
    borderColor: "#cbf0f8",
  },
  light: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#e8eaed",
    borderColor: "rgb(40, 44, 52)",
  },
  red: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#f28b82",
    borderColor: "rgb(40, 44, 52)",
  },
  orange: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fbbc04",
    borderColor: "rgb(40, 44, 52)",
  },
  yellow: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fff475",
    borderColor: "rgb(40, 44, 52)",
  },
  purple: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#d7aefb",
    borderColor: "rgb(40, 44, 52)",
  },
  pink: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#fdcfe8",
    borderColor: "rgb(40, 44, 52)",
  },
  blue: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#aecbfa",
    borderColor: "rgb(40, 44, 52)",
  },
  skyblue: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#cbf0f8",
    borderColor: "rgb(40, 44, 52)",
  },
  brown: {
    color: "rgb(40, 44, 52)",
    backgroundColor: "#e6c9a8",
    borderColor: "rgb(40, 44, 52)",
  },
}

let images = {
  image1: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  image2: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  image3: "https://bipbap.ru/wp-content/uploads/2017/04/0_7c779_5df17311_orig.jpg",
  image4: "https://lh3.googleusercontent.com/proxy/fWdndXFFlWEpb4KxiwNyEG4FcNT0AckGCHs5h-F25WoAXsTkcEpxIaa7j8fnRWk5AXFXH3LHWjblf_5lp4A3zQNCZUaM_o8",
  image5: "https://storage.ws.pho.to/s2/BA338FD8-AD48-11E9-8DEA-026B9DE2F0AA_m.jpg",
  image6: "https://photolemur.com/uploads/blog/unnamed.jpg",
}


export const ThemeContext = createContext(themes.light); 

function App () {

  const [isFormShown, setIsFormShown] = useState(true);
  const [typeOfTheme, setTypeOfTheme] = useState(themes.light);
  const [isShown, setIsShown] = useState(false);

  const showTaskForm = () => {
      setIsFormShown(!isFormShown);
  }

  const showThemeChangeBlock = () => {
    setIsShown(!isShown);
  }
  
  const chooseTheme = (event) => {
    setTypeOfTheme(themes[`${event.target.dataset.color}`]);
  }

  const [backgroundImage, setBackgroundImage] = useState("");

  const changeBackground = (event) => {
      setBackgroundImage(event.target.src);
  }

  const deleteBackgroundImage = () => {
      setBackgroundImage("");
  }

  
  useEffect(() => {
      document.body.style.backgroundImage = "url('" + backgroundImage + "')";
  }, [backgroundImage]);

  
  useEffect(() => {
    document.body.style.backgroundColor = typeOfTheme.backgroundColor;
  }, [typeOfTheme]);

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

    const themeColor = typeOfTheme["color"];
    
  return (
      <div>
        <ThemeContext.Provider value = {typeOfTheme}>
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
          <SwitchTasksListView />

            <ToggleThemeButton 
              showThemeChangeBlock = {showThemeChangeBlock} 
              isShown = {isShown}
              chooseTheme = {chooseTheme}
              changeBackground = {changeBackground}
              deleteBackgroundImage = {deleteBackgroundImage}

              image1 = {images.image1}
              image2 = {images.image2}
              image3 = {images.image3}
              image4 = {images.image4}
              image5 = {images.image5}
              image6 = {images.image6}
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
