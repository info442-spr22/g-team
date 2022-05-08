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

  function Triangle() {
    return (
      <svg width="16" height="14" className={styles.sticker} onClick={select}>
        <path d="
          M 8 0
          L 16 14
          H 0
          Z
          " />
      </svg>
    )
  }

  switch (props.type) {
    case ('circle'): return <Circle />
    case ('triangle'): return <Triangle />
    default:
      return <h2>Error Message TBD</h2>;
  }
}

export default ToolBarSticker;