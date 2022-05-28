import React from "react"
import {CursorFill, TextareaT} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'
import ColorPicker from "../../tool/ColorPicker/ColorPicker"
import stickerStyles from "../../sticker/tool-bar/ToolBarSticker.module.css"


export default function ActionBar(props) {
  let stickers = stickerHotKeys.map(({name, hotkey}) =>
    <button id="selectMove" type="button" className={"btn selectMove " + styles.actionBarButton} key={name}>
      <ToolBarSticker
        type={name}
        selected={props.selectedSticker === name}
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
        <div onClick={() => {props.setSelectedSticker("select")}} className={props.selectedSticker === "select" ? stickerStyles.selectedButton : ''}>
          <button id="selectMove" type="button" className={"btn selectMove " + styles.actionBarButton}>
            <CursorFill />
          </button>
        </div>
        <div>
        <ColorPicker setCanvasColor={props.setCanvasColor}/>
        </div>
          <div onClick={() => {props.setSelectedSticker("text")}} className={props.selectedSticker === "text" ? stickerStyles.selectedButton : ''}>
              <button id="textBox" type="button" className="btn">
                  <TextareaT size='32px'/>
              </button>
          </div>
        {stickers}
      </div>
    </div>
  );
}
