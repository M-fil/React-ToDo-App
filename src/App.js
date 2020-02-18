import React, { useState, createContext, useEffect } from 'react';

import ToDoForm from "./ToDoForm";
import ToDoList from './ToDoList';
import useToDo from "./useToDo";
import ToggleThemeButton from "./ToggleThemeButton";
import LeftSideBlock from "./LeftSideBlock";
import SwitchTasksListView from "./SwitchTasksListView";
import DeadlineSortButton from "./DeadlineSortButton";
import useDeadlineSort from "./useDeadlineSort";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jfif";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";


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
  image1: image1, 
  image2: image2,
  image3: image3, 
  image4: image4, 
  image5: image5, 
  image6: image6,
} 

export const ThemeContext = createContext(themes.dark); 

function App () {
  const [withSquares, setWithSquares] = useState(true);

  const [isFormShown, setIsFormShown] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const [typeOfTheme, setTypeOfTheme] = useState(themes.dark);

  const showTaskForm = () => {
      setIsFormShown(!isFormShown);
  }

  const showThemeChangeBlock = () => {
    setIsShown(!isShown);
  }
  
  const chooseTheme = (event) => {
    setTypeOfTheme(themes[`${event.target.dataset.color}`]);
  }

  const [backgroundImage, setBackgroundImage] = useState(images.image2);

  const changeBackground = (event) => {
      setBackgroundImage(event.target.src);
  }

  const deleteBackgroundImage = () => {
      setBackgroundImage("");
  }

  const changeListView = () => {
      setWithSquares(!withSquares);

      setCommonTaskData(
        [
          ...taskData.tasks1,
          ...taskData.tasks2,
          ...taskData.tasks3,
          ...taskData.tasks4,
        ]
      ); 
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
    deadlineRef,
    
    deleteTaskFromCommonList,
    commonTaskData,
    setCommonTaskData} = useToDo();

    const { sortSample, isDescSort, setIsDescSort } = useDeadlineSort();
    
    const sortByDeadline = () => {
      setIsDescSort(!isDescSort);
      sortSample(commonTaskData, isDescSort);
    }

    const themeColor = typeOfTheme["color"];
    
  return (
      <div className="root-container">
        <ThemeContext.Provider value = {typeOfTheme}>
          <SwitchTasksListView 
            changeListView = {changeListView} 
            withSquares = {withSquares}
          />

          <LeftSideBlock 
            showTaskForm = {showTaskForm}
            isFormShown = {isFormShown}
          >
            {isFormShown ? (
              <ToDoForm 
                withSquares = {withSquares}
                title = {!withSquares 
                  ? "After switching to the view with Blocks all tasks will be saved in one block"
                  : null
                }

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

          <div id = "squares">
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
              id = "main-title" 
              style = {{
                color: themeColor,
              }}
            >
              ToDo App
              {
                !withSquares ?            
                  <DeadlineSortButton 
                    array = {commonTaskData} 
                    sort = {sortByDeadline} 
                    isDescSort = {isDescSort}
                    position = "relative"
                  /> 
                : null
              }
            </h1>

            <ToDoList 
              withSquares = {withSquares}
              commonList = {commonTaskData}
              deleteTask = {deleteTaskFromCommonList}
              
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
