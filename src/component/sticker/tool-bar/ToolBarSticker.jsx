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

  function Heart() {
    return(
      <svg height = "32" width = "32" className={styles.sticker} onClick={select}>
        <path d="
          M 0,10
          A 5,5 0,0,1 16,10
          A 5,5 0,0,1 32,10
          Q 32,20 16,30
          Q 0,20 0,10 z
          "/>
      </svg>
    );
  }

  switch (props.type) {
    case ('circle'): return <Circle />
    case ('heart'): return <Heart />
    default:
      return <h2>Error Message TBD</h2>;
  }
}

export default ToolBarSticker;