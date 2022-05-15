import React from "react"
import {CursorFill, TextareaT} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'

export default function ActionBar(props) {
  let stickers = stickerHotKeys.map( ({name, hotkey}) =>
    <button id="selectMove" type="button" className="btn selectMove">
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
          <button id="selectMove" type="button" className="btn">
            <CursorFill />
          </button>
        </div>
          <div onClick={() => {props.setSelectedSticker("select")}}>
              <button id="textBox" type="button" className="btn">
                  <TextareaT size='32px'/>
              </button>
          </div>
        {stickers}
      </div>
    </div>
  );
}