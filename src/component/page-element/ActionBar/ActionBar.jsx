import React, {useState} from "react";
import {CursorFill} from 'react-bootstrap-icons';
import styles from "./ActionBar.module.css"


export default function ActionBar() {
  return(
    <div className={styles.wrapper}>
    <div className={styles.actionBar}>
      <div className={styles.selectMoveTool}>
        <button id="selectMove" type="button" class="btn selectMove">
          <CursorFill />
        </button>
        </div>
    </div>
  </div>
  );
}

let button = document.getElementById('selectMove');

button.addEventListener('click', () => button.style.backgroundColor = '#DAF7A2')
button.addEventListener('click', () => button.style.borderColor = '#1E2F4D')
