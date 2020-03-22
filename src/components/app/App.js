import React, { useState, createContext, useEffect } from 'react';

import ToDoForm from "../task-form/ToDoForm";
import ToDoList from '../tasks-container/ToDoList';
import ToggleThemeButton from "../app-theme/ToggleThemeButton";
import LeftSideBlock from "../task-form/LeftSideBlock";
import SwitchTasksListView from "../app-view/SwitchTasksListView";
import DeadlineSortButton from "../sorting/DeadlineSortButton";
import Footer from '../footer/Footer';

import themes from "../lib/themes";
import images from "../lib/images";

// Redux
import { connect } from 'react-redux';
import { sortTasks, combineTasks } from '../../redux/tasks_types/tasksTypesActions';


export const ThemeContext = createContext(themes.dark); 

function App ({ sortTasks, combineTasks, commonList }) {

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
      combineTasks();
  }
  
  useEffect(() => {
      document.body.style.backgroundImage = "url('" + backgroundImage + "')";
      return () => document.body.style.backgroundImage = null;
  }, [backgroundImage]);

  useEffect(() => {
    document.body.style.backgroundColor = typeOfTheme.backgroundColor;
    return () => document.body.style.backgroundColor = null;
  }, [typeOfTheme]);
  
  const [isDescSort, setIsDescSort] = useState(false);

  const sortByDeadline = () => {
    setIsDescSort(!isDescSort);
    sortTasks(isDescSort, '')
  }
  
  const themeColor = typeOfTheme["color"];
  
  return (
    <div data-testid='app'>
      <div className="root-container">
        <ThemeContext.Provider value = {typeOfTheme}>
          <SwitchTasksListView 
            changeListView = {changeListView}
          />

          <LeftSideBlock >
              <ToDoForm 
                withSquares = {withSquares}
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
                    sort = {sortByDeadline}
                    array = {commonList}
                    isDescSort = {isDescSort}
                    position = "relative"
                  /> 
                : null
              }
            </h1>

            <ToDoList 
              withSquares = {withSquares}
              commonList = {commonList}
            />
          </div>
        </ThemeContext.Provider>
      </div>

      <Footer />
    </div>
  );
}

const mapState = (state) => {
  return {
    ...state,
    commonList: state.commonList,
  }
}

const mapDispatch = {
  sortTasks,
  combineTasks,
}

export default connect(mapState, mapDispatch)(App);
