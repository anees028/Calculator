import React from 'react'
import './clearButton.css'

const clearButton = (props) => {
   return (
        <div
            className="clear-btn"
            onClick={props.handleClear}
        >
            {props.children}
        </div>
    )
}

export default clearButton;
