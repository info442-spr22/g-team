import React, {useState} from "react";
import {CursorFill} from 'react-bootstrap-icons';
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'


export default function ActionBar() {
  /*let button = document.getElementById('selectMove');

  button.addEventListener('click', () => button.style.backgroundColor = '#DAF7A2')
  button.addEventListener('click', () => button.style.borderColor = '#1E2F4D')*/

  return(
    <div className={styles.wrapper}>
      <div className={styles.actionBar}>
        <div>
          <button id="selectMove" type="button" class="btn selectMove">
            <CursorFill />
          </button>
          <ToolBarSticker type={'circle'} />
          <ToolBarSticker type={'ellipse'} />
          <ToolBarSticker type={'line'} />
          <ToolBarSticker type={'arrow'} />
          <ToolBarSticker type={'triangle'} />
        </div>
      </div>
    </div>
  );
}