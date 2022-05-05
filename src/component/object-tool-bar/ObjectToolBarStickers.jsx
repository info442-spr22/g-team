import React from 'react';
import styles from './ObjectToolBar.module.css';

function ObjectToolBarStickers(props) {

  function select() {
    console.log("select functionality TBD");
  }

  function Circle() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <circle cx="15" cy="15" r="15"/>
      </svg>
    );
  }

  if (props.type === "circle") {
    return <Circle />;
  } else {
    return <h2>Error Message TBD</h2>;
  }
}

export default ObjectToolBarStickers;