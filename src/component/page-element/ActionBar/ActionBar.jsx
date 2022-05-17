import React from "react"
import {CursorFill, TextareaT} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'


export default function ActionBar(props) {
  let stickers = stickerHotKeys.map(({name, hotkey}) =>
    <button id="selectMove" type="button" className={"btn selectMove " + styles.actionBarButton} key={name}>
      <ToolBarSticker
        type={name}
        setSelectedSticker={(sticker) => {
          console.log(sticker)
          props.setSelectedSticker(sticker)
        }}
        hotkey={hotkey}
      />
    </button>
  )
 



  return(
    <div className={styles.wrapper}>
      <div className={styles.actionBar}>
        <div onClick={() => {props.setSelectedSticker("select")}}>
          <button id="selectMove" type="button" className={"btn selectMove " + styles.actionBarButton}>
            <CursorFill />
          </button>
          <button id="colorPicker" type="button" className="btn colorPicker">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
          <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"/>
          </svg>
          </button>
        </div>
          <div onClick={() => {props.setSelectedSticker("text")}}>
              <button id="textBox" type="button" className="btn">
                  <TextareaT size='32px'/>
              </button>
          </div>
        {stickers}
      </div>
    </div>
  );
}