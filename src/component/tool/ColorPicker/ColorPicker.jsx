import React, {useState} from 'react'
import { SketchPicker } from 'react-color'
import styles from "../../page-element/ActionBar/ActionBar.module.css"
import PropertiesSidebar from '../../page-element/PropertiesSidebar/PropertiesSidebar'





export default function ColorPicker(props) {
  const [color, setColor] = useState('#ff0000');
  const [open, setOpen] = useState(false);

  const canvas = document.getElementById("canvas");

  const openColorPicker = () => {
    setOpen(!open);
  }

  return(
    <div>    
      <div className={"colorWindow " + styles.colorWindow} position="absolute" id="colorWindow">
      {open &&<SketchPicker color={color} onChangeComplete={(color) => {setColor(color.hex)}} />
      }
      </div>
      <div>
      <button onClick={() => openColorPicker()} id="colorPicker" type="button" className={"btn colorPicker " + styles.actionBarButton}>    
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
            <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"/>
            </svg>
      </button>
      </div>
    <div style={{
      backgroundColor: color
    }}>
    
    </div>
    </div>
  )
}


// export default function App() {
//     const [state, updateState] = useState("#FFFFFF");
  
//     const handleInput = e => {
//       updateState(e.target.value);
//     };
  
//     return (
//       <div className="App">
//         <ColorPicker onChange={handleInput} value={state} />
//       </div>
//     );
//  }



