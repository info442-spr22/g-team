import React from "react"
import {CursorFill, TextareaT} from 'react-bootstrap-icons'
import {stickerHotKeys} from '../../../page/Scrapbook/Scrapbook'
import styles from "./ActionBar.module.css"
import ToolBarSticker from '../../sticker/tool-bar/ToolBarSticker'
import ColorPicker from "../../tool/ColorPicker/ColorPicker"
import stickerStyles from "../../sticker/tool-bar/ToolBarSticker.module.css"


export default function ActionBar(props) {
  let stickers = stickerHotKeys.map(({name, hotkey}) =>
    <button type="button" className={"btn " + (props.selectedSticker === name ? stickerStyles.selectedButton : '')} key={name}>
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
        <button onClick={() => {props.setSelectedSticker("select")}} type="button" className={"btn " + ( props.selectedSticker === "select" ? stickerStyles.selectedButton : '' )}>
          <CursorFill />
        </button>
        <div>
          <ColorPicker setCanvasColor={props.setCanvasColor}/>
        </div>
        <button onClick={() => {props.setSelectedSticker("text")}} type="button" className={"btn " + ( props.selectedSticker === "text" ? stickerStyles.selectedButton : '' )}>
          <TextareaT size='32px'/>
        </button>
        {stickers}
      </div>
    </div>
  );
}
