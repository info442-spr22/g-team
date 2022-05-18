import React from "react"
import {CursorFill, TextareaT} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'
import ColorPicker from "../../tool/ColorPicker/ColorPicker"


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
        </div>
        <div>
        <ColorPicker setCanvasColor={props.setCanvasColor}/>
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
