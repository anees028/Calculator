import React from 'react'
import './button.css'


const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const button = (props) => {
    return (
        <div 
            className={`button_wrapper ${ isOperator(props.children) ? null : "operator"}`}
            onClick={() => props.handleClick(props.children)}
        >
            {props.children}
        </div>
    )
}


export default button;

