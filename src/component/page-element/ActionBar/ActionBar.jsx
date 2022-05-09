import React from "react"
import {CursorFill} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'


export default function ActionBar(props) {
  /*let button = document.getElementById('selectMove');

  button.addEventListener('click', () => button.style.backgroundColor = '#DAF7A2')
  button.addEventListener('click', () => button.style.borderColor = '#1E2F4D')*/

  let stickers = stickerHotKeys.map( ({name}) =>
    <ToolBarSticker
      type={name}
      setSelectedSticker={props.setSelectedSticker}
      key={name}
    />
  )

  return(
    <div className={styles.wrapper}>
      <div className={styles.actionBar}>
        {/*<div>*/}
        {/*  <button id="selectMove" type="button" class="btn selectMove">*/}
        {/*    <CursorFill />*/}
        {/*  </button>*/}
        {/*</div>*/}
        {stickers}
      </div>
    </div>
  );
}