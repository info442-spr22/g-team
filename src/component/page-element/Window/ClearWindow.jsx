import React from 'react'
import Button from '../../page-element/Button/Button'
import prevState from '../../../page/Scrapbook/Scrapbook'
import element from '../../../page/Scrapbook/Scrapbook'
 

export default function ClearWindow(props) {
  
  //const [clear, setClear] = useState(false);


  const clearCanvas = () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  

  
return(
    <div>   
    <div class="window active" id="window">
    <div class="window-header">
    <div class="title">
      Warning
    </div>
    <button data-close-button class="close-button" id="closeId" onClick={props.closePopup}>&times; </button>
    </div>
    <div class="window-body">
      Are you sure you want to restart?
      </div>
      <div class="window-buttons">
        <Button clear onClick={props.closePopup, clearCanvas()}>Yes, clear my canvas</Button>
        <Button noclear onClick={props.closePopup}>No, don’t clear my canvas</Button>
      </div>
      </div>
      <div id="overlay" class="overlay"></div>
      </div>
)
}