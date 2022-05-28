import React from 'react'
import styles from './TextBox.module.css'
import createText from '../../../utils/CreateText'



function handleEnter(event, props, textInputRef) {
  props.setInputIsEmpty((
    /\\s/.test(textInputRef.current.value) ||
    textInputRef.current.value === ""
  ))

  const ctx = document.getElementById("canvas").getContext("2d")
  if (event.key === "Enter") {
    const textElement = createText(
        ctx,
        {
          font: props.textInputInfo.font,
          size: props.textInputInfo.size + "px",
          align: "left",
          style: props.textInputInfo.font,
          text: event.target.value,
          location: {
            x: props.textInputPosition.x - props.canvasPosition.x,
            y: props.textInputPosition.y - props.canvasPosition.y
          },
          stickerType: "text",
          id: props.id
        }
    );

    props.setTextElements((prevState) => [...prevState, textElement])


    props.setInputPosition({})
    props.setSelectedSticker("select")
    props.setTextInputInfo({
      font: "Comic Sans MS",
      size: "30",
      style: "black"
  })
  } else if (/^.{1}$|^\s{1}$|^(Backspace)$/.test(event.key)) {

    ctx.font = props.textInputInfo.size + "px " + props.textInputInfo.font
    textInputRef.current.style.fontSize = props.textInputInfo.size + "px"
    textInputRef.current.style.fontFamily = props.textInputInfo.font

    let extraSpace = "   "
    let metrics = ctx.measureText(
      event.key === "Backspace" ? textInputRef.current.value + extraSpace
                      : textInputRef.current.value + event.key + extraSpace
    )
    let width = metrics.width
    textInputRef.current.style.width = width + "px"
  }
}

function TextBox(props) {

    const textInputRef = React.useRef(null)

    // AutoFocus
    React.useEffect(() => {

      if (props.textInputPosition.x && props.textInputPosition.y) {
        setTimeout(() => {
          textInputRef.current.focus()
        }, 1)

        const whiteSpace = new RegExp("\\s")
        let inputValue = textInputRef.current.value
        props.setInputIsEmpty(whiteSpace.test(inputValue) || inputValue === "")
      }
    }, [props])


    return(
    <div>
      {props.textInputPosition.x && props.textInputPosition.y &&
        <input className={styles.text_box_input} style={{
        left: `${props.textInputPosition.x}px` ,
        top: `${props.textInputPosition.y}px`
        }} onKeyDown={function(event) {handleEnter(event, props, textInputRef)}}
        ref={textInputRef}/>
      }
    </div>
    )
}

export default TextBox