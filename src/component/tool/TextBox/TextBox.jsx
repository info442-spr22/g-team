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
        props.textInputPosition.x - props.canvasPosition.x,
        props.textInputPosition.y - props.canvasPosition.y,
        event.target.value
    );

    props.setTextElements((prevState) => [...prevState, textElement])


    props.setInputPosition({})
    props.setSelectedSticker("select")
  } else if (/^.{1}$|^\s{1}$|^(Backspace)$/.test(event.key)) {
    console.log(event.key)
    ctx.font = "30px Comic Sans MS"
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