import React from "react";
import styles from "./PropertiesSidebar.module.css"


function handleBlur(event, props, inputValue) {
  if (event.target.name === 'fontSize') {
    props.setTextInputInfo({
      font: props.textInputInfo.font,
      size: inputValue,
      style: props.textInputInfo.style
    })
  } else if (event.target.name === 'font') {
    props.setTextInputInfo({
      font: inputValue,
      size: props.textInputInfo.size,
      style: props.textInputInfo.style
    })
  }
}

function handleEnter(event) {
  if (event.key === "Enter") {
    event.target.blur()
  }
}

export default function PropertiesSidebar(props) {
  const [inputFontSize, setInputFontSize] = React.useState("30")

  return(
    <div className={styles.wrapper}>
      <div className={styles.sideBar}>
        {props.textInputPosition.x && props.textInputPosition.y &&
          <div className={styles.textProperties}>
            <div>
              <label htmlFor="fontSize">Font Size: </label>
              <input type="text" name="fontSize" defaultValue="30"
               onBlur={function(event) {handleBlur(event, props, inputFontSize)}}
               onKeyDown={handleEnter}
               onChange={(event) => {setInputFontSize(event.target.value)}}
              />
            </div>
            <div>
              <label htmlFor="font">Font: </label>
              <select type="text" name="font" onChange={(event) => {
                handleBlur(event, props, event.target.value)
              }}>
                <option value="Comic Sans MS" autoFocus>Comic Sans MS</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Lucida Handwriting">Lucida Handwriting</option>
                <option value="Arial">Arial</option>
              </select>
            </div>
          </div>
        }
      </div>
    </div>
  );
}