import React, { useState, createContext, useEffect } from 'react';

import ToDoForm from "../task-form/ToDoForm";
import ToDoList from '../tasks-container/ToDoList';
import useToDo from "../generic/useToDo";
import ToggleThemeButton from "../app-theme/ToggleThemeButton";
import LeftSideBlock from "../task-form/LeftSideBlock";
import SwitchTasksListView from "../app-view/SwitchTasksListView";
import DeadlineSortButton from "../sorting/DeadlineSortButton";
import useDeadlineSort from "../sorting/useDeadlineSort";
import Footer from '../footer/Footer';

import themes from "../lib/themes";
import images from "../lib/images";

export const ThemeContext = createContext(themes.dark); 

function App () {
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
    setCommonTaskData,
  
    currentTask} = useToDo();

  const [withSquares, setWithSquares] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const [typeOfTheme, setTypeOfTheme] = useState(themes.dark);

  const showThemeChangeBlock = () => setIsShown(!isShown);
  const chooseTheme = (event) => setTypeOfTheme(themes[`${event.target.dataset.color}`]);
  const [backgroundImage, setBackgroundImage] = useState(images.image2);
  const changeBackground = (event) => setBackgroundImage(event.target.src);
  const deleteBackgroundImage = () => setBackgroundImage("");

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
      return () => document.body.style.backgroundImage = null;
  }, [backgroundImage]);

  useEffect(() => {
    document.body.style.backgroundColor = typeOfTheme.backgroundColor;
    return () => document.body.style.backgroundColor = null;
  }, [typeOfTheme]);

  const { sortSample, isDescSort, setIsDescSort } = useDeadlineSort();
  
  const sortByDeadline = () => {
    console.log('taskData from App', commonTaskData)
    setIsDescSort(!isDescSort);
    sortSample(commonTaskData, isDescSort);
  }

  const themeColor = typeOfTheme["color"];
  
  return (
    <>
      <div className="root-container">
        <ThemeContext.Provider value = {typeOfTheme}>
          <SwitchTasksListView 
            changeListView = {changeListView} 
            withSquares = {withSquares}
          />

          <LeftSideBlock >
              <ToDoForm 
                withSquares = {withSquares}

                text = {currentTask.text}
                deadline = {currentTask.deadline}
                importance = {currentTask.importance}
                addTask = {addTask}
                TextHandleInput = {onChangeHandler}
                deadlineHandleInput = {onChangeHandler}
                importanceHandleInput = {onChangeHandler}
                textRef = {textRef}
                deadlineRef = {deadlineRef}
              /> 
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

      <Footer />
    </>
  );
}

export default App;
