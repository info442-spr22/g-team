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
        </div>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'circle'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'ellipse'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'square'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'rectangle'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'line'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'arrow'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'triangle'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'star'} />
        </button>
        <button id="selectMove" type="button" class="btn selectMove">
          <ToolBarSticker type={'heart'} />
        </button>
      </div>
    </div>
  );
}