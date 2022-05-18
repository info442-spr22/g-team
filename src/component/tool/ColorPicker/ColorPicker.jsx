import React from 'react'
import { SketchPicker } from 'react-color'
import styles from "../../page-element/ActionBar/ActionBar.module.css"


export default function ColorPicker(props) {
  const [open, setOpen] = React.useState(false);
  const [color, setColor] = React.useState("#ffffff");

  const ref = React.useRef(null);


  const pickerStyles = {
    default: {
      picker: {
        position: "absolute" ,
        bottom: "50px"
      }
    }
  };

  // code for checking if clicked outside from https://www.codingdeft.com/posts/react-on-click-outside/#closing-the-dropdown-when-clicked-outside
  React.useEffect(() => {
    const checkIfClickedOutside = event => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (open && ref.current && !ref.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [open])


  return(
    <div ref={ref}>
      <div className="container-color">
      {open &&<SketchPicker styles={pickerStyles} color={color} onChangeComplete={(color) => {
        props.setCanvasColor(color.hex)
        setColor(color.hex)
      }}/>}

      </div>
      <div style={{
      backgroundColor: color
    }}>
            <button onClick={() => setOpen(true)} id="colorPicker" type="button" className={"btn colorPicker " + styles.actionBarButton}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eyedropper" viewBox="0 0 16 16">
            <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"/>
            </svg>
      </button>
      </div>
    </div>
  )
}



