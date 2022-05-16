import React from 'react'
import styles from './TextBox.module.css'
import createText from '../../../utils/CreateText'

function handleEnter(event, props) {
  if (event.key === "Enter") {
    const ctx = document.getElementById("canvas").getContext("2d")

    const textElement = createText(
        ctx,
        props.textInputPosition.x - props.canvasPosition.x,
        props.textInputPosition.y - props.canvasPosition.y,
        event.target.value
    );

    props.setTextElements((prevState) => [...prevState, textElement])


    props.setInputPosition({})
    props.setSelectedSticker("select")
  }
}

function TextBox(props) {
  return(
    <div>
      {props.textInputPosition.x && props.textInputPosition.y &&
        <input className={styles.text_box_input} style={{
        left: `${props.textInputPosition.x}px` ,
        top: `${props.textInputPosition.y}px`
        }} onKeyDown={function(event) {handleEnter(event, props)}}/>
      }
    </div>
  )
}

export default TextBox