import {React, useState} from "react";
import './ext.css';
import styles from "./cssDemo.module.css";
import styled from "styled-components";
import classNames from "classnames";
function InlinecssDemo(props) {

  const [isActive, setIsActive] = useState(false);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const buttonClasses = classNames({
    'active': isActive,
    'highlight': isHighlighted,
    'disabled': isDisabled,
    'rounded': true, // Always apply 'rounded' class
  })

  const toggleClasses = () => {
    setIsActive(!isActive)
    setIsHighlighted(!isHighlighted)
  }
    const inlineStyle = {
         'backgroundColor' : 'red',
         'border': '5px',
         'display': 'inline'
    };

    const StyledDiv = styled.div`
        background-color: green;
        min-height: 10vh;
        color: white;
    `;

    return (
        <>
            <div style={inlineStyle}>This is div with inline style</div>
             <div className="demo">External stylesheet</div>
             <button className={styles.button}>Click me</button>
             <StyledDiv>I am style component</StyledDiv>
             <button onClick={toggleClasses} className={buttonClasses} disabled={isDisabled}>
              Advanced Toggle Button
            </button>
        </>
    )
}
export default InlinecssDemo;