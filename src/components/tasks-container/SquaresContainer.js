import React from "react";
import "./to-do-list.css";
import Square from "./Square";
import { connect } from 'react-redux';

function SquaresContainer ({ tasks1, tasks2, tasks3, tasks4 }) {
    return (
        <div id="main">
            <Square 
                square = {tasks1} 
                squareNumber = "I - Urgent" 
            />
            <Square 
                square = {tasks2} 
                squareNumber = "II - Important"
            />
            <Square 
                square = {tasks3} 
                squareNumber = "III - For Later"
            />
            <Square 
                square = {tasks4} 
                squareNumber = "IV - Delegate to Another"
            />
        </div>
    );
}

const mapState = (state) => {
    return {
        ...state,
        tasks1: state.tasks1,
        tasks2: state.tasks2,
        tasks3: state.tasks3,
        tasks4: state.tasks4,
    }
}

export default connect(mapState)(SquaresContainer);