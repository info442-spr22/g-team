import React from 'react';
import styles from '../Sticker.module.css';

function Circle() {

  function select() {
    console.log("select functionality TBD");
  }

  return(
    <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
      <circle cx="15" cy="15" r="15"/>
    </svg>
  );
}

export default Circle;