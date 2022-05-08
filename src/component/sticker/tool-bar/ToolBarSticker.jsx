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

  function Square() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <rect width="30" height="30"/>
      </svg>
    );
  }

  switch (props.type) {
    case ('circle'): return <Circle />;
    case ('square'): return <Square />;
    default:
      return <h2>Error Message TBD</h2>;
  }
}

export default ToolBarSticker;