import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {CursorFill} from 'react-bootstrap-icons';
import styles from "./ActionBar.module.css"


export default function ActionBar(props) {
  const [selected, setSelected] = useState(false);
  return(
    <div className={styles.wrapper}>
    <div className={styles.actionBar}>
      <div className={styles.selectMoveTool}>
        <button id="selectMove" type="button" class="btn" Click={() => setSelected(true)}>
          <CursorFill />
        </button>
        </div>
    </div>
  </div>
  );
}