import React, { useContext, useState } from 'react';
import { ThemeContext } from "../app/App";

import ToDoForm from './ToDoForm';
import ToggleFormButton from './ToggleFormButton';

function LeftSideBlock({ withSquares }) {
    const theme = useContext(ThemeContext);
    const themeColor = theme.color;
    const themeBackgroundColor = theme.backgroundColor;
    const borderColor = "1px solid " + theme.borderColor;

    const [isFormShown, setIsFormShown] = useState(true);
    const showTaskForm = () => setIsFormShown(!isFormShown);

    return (
        <div 
            data-testid='left-side-block'
            id = "left-side" 
            style = {{
                backgroundColor: themeBackgroundColor,
                borderRight: borderColor,
                borderBottom: borderColor,
            }}          
        >

            <ToggleFormButton 
                showTaskForm={showTaskForm} 
                isFormShown={isFormShown} 
            />
            
            <h2 id = "todo-title" style = {{color: themeColor}}>
                ToDo App
            </h2>

            { isFormShown ? <ToDoForm withSquares = {withSquares} /> : null }
        </div>
    )
}

export default LeftSideBlock;
