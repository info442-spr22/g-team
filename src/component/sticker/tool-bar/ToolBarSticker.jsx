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

  function Arrow() {
    return (
      <svg width="32" height="32" className={styles.sticker} onClick={select}>
        <path fill="none" stroke="black" d="
          M 2 30
          L 30 2
          " />
        <path fill="none" stroke="black" d="
          M 20 2
          H 30
          V 12
          " />
      </svg>
    )
  }

  switch (props.type) {
    case ('circle'): return <Circle />
    case ('arrow'): return <Arrow />
    default:
      return <h2>Error Message TBD</h2>;
  }
}

export default ToolBarSticker;