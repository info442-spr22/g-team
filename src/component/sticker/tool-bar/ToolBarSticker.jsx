import React from 'react';
import styles from './ToolBarSticker.module.css';

function ToolBarSticker(props) {

  // select functionality
  function select(event) {
    console.log("Click select functionality TBD");
  }

  function Circle() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <circle cx="15" cy="15" r="15"/>
      </svg>
    );
  }

  function Star() {
    return (
      <svg width="48" height="45" className={styles.sticker} onClick={select}>
        <path fill="white" d="
          M 24 0
          L 18 18
          H 0
          L 15 28
          L 9 45
          L 24 35
          L 38 45
          L 33 28
          L 48 18
          H 30
          L 24 0 Z
          " />
      </svg>
    )
  }

  switch (props.type) {
    case ('circle'): return <Circle />
    default:
      return <h2>Error Message TBD</h2>;
  }
}

export default ToolBarSticker;