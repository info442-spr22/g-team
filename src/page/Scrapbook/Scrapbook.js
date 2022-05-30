import React, {useLayoutEffect, useState} from "react"
import styles from './Scrapbook.module.css'
import rough from "roughjs/bundled/rough.esm"
import NavBar from '../../component/page-element/NavBar/NavBar'
import PropertiesSidebar from '../../component/page-element/PropertiesSidebar/PropertiesSidebar'
import ActionBar from '../../component/page-element/ActionBar/ActionBar'
import createElement from '../../utils/CreateElement'
import getElementAtPosition from "../../utils/GetElementAtPosition"
import drawSelectedBox from "../../utils/DrawSelectedBox"
import createText from "../../utils/CreateText"
import TextBox from "../../component/tool/TextBox/TextBox"
import Button from '../../component/page-element/Button/Button'
import ShareWindow from '../../component/page-element/Window/ShareWindow'
import ClearWindow from '../../component/page-element/Window/ClearWindow'
import SaveWindow from '../../component/page-element/Window/SaveWindow'
import { useScreenshot } from "use-react-screenshot";
import {IMAGES} from '../../resources/constants/storage-keys'
import TwitterPostService from '../../utils/TwitterPostService'
import Popup from '../../component/page-element/Window/ErrorMessage'

const generator = rough.generator();

export const stickerHotKeys = [
    {"name": "circle", "hotkey": "c"},
    {"name": "ellipse", "hotkey": "e"},
    {"name": "square", "hotkey": "s"},
    {"name": "rectangle", "hotkey": "r"},
    {"name": "line", "hotkey": "l"},
    {"name": "arrow", "hotkey": "a"},
    {"name": "triangle", "hotkey": "T"},
    {"name": "star", "hotkey": "x"},
    {"name": "heart", "hotkey": "h"}
]


const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [textElements, setTextElements] = useState([]);
    const [action, setAction] = useState('none');
    const [windowDimensions, setWindowDimensions] = React.useState({})
    const [canvasPosition, setCanvasPosition] = React.useState({x: 0, y:0})
    const [selectedSticker, setSelectedSticker] = React.useState('select')
    const [updatedSticker, setUpdatedSticker] = React.useState('null')
    const [textInputPosition, setInputPosition] = React.useState({})
    const [inputIsEmpty, setInputIsEmpty] = React.useState(false)
    const [textInputInfo, setTextInputInfo] = React.useState({
        font: "Comic Sans MS",
        size: "30",
        style: "black"
    })
    const [selectedElement, setSelectedElement] = React.useState(null)
    const [showSharingPopup, setShowSharingPopup] = React.useState(false)
    const [showClearPopup, setShowClearPopup] = React.useState(false)
    const [showSavePopup, setShowSavePopup] = React.useState(false)
    const [errorPopup, setErrorPopup] = React.useState(false)
    const [canvasColor, setCanvasColor] = useState('#ffffff');

    let canvasRef = React.useRef(null)

    let canvasCallbackRef = React.useCallback(canvas => {
        if (canvas) {
            let posInfo = canvas.getBoundingClientRect()
            setCanvasPosition({x: posInfo.x, y: posInfo.y})
            canvasRef.current = canvas
        }
        // A change in windowDimensions changes the position of the canvas, so windowDimensions is a
        // dependency of this callback, but linters can't detect that kind of dependency
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [windowDimensions])

    React.useEffect(() => {
        let resizeHandler = () => {
            setWindowDimensions({ x: window.innerWidth, y: window.innerHeight })
        }
        window.addEventListener("resize", resizeHandler)
    }, [])

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Re-rendering everytime clicks
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        const roughCanvas = rough.canvas(canvas);

        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
        textElements.forEach((textElement) => createText(
            ctx,
            textElement
        ));

        drawSelectedBox(updatedSticker, generator)
        if (action !== "selected") {
            setUpdatedSticker("null")
        }

    }, [action, elements, textElements, updatedSticker]);

    // mouse tracking
    const handleMouseDown = (event) => {
        const { clientX, clientY} = event;
        // redraw canvas without the selection box
        // (makes it so user cannot select multiple items at once and
        // the selection box will not be drawn multiple times)
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const roughCanvas = rough.canvas(canvas);

        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));
        textElements.forEach((textElement) => createText(
            ctx,
            textElement
        ));

        if (inputIsEmpty) {
            setInputPosition({})
        }

        // if select is active, do moving, else do drawing
        if (selectedSticker === "select") {
            const element = getElementAtPosition(
                clientX - canvasPosition.x,
                clientY - canvasPosition.y,
                elements, textElements
            )
            if (element) {
                setAction('selected')
                let offsetX = clientX - element.selectInfo.x
                let offsetY = clientY - element.selectInfo.y
                setSelectedElement({...element, offsetX, offsetY})
                setUpdatedSticker(element)
            } else {
                // reset action to none
                setAction('none')
                // remove the selected element
                setSelectedElement(null)
            }
        } else if (selectedSticker === "text") {
            if (!textInputPosition.x) {
                setInputPosition({x: clientX, y: clientY})

                setAction("texting")
            }
        } else {
            // Starting pt is clientX, clintY and first create element end pt is same as start pt

            const id = elements.length;
            const element = createElement(
                generator,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                selectedSticker, id
            );
            setElements((prevState) => [...prevState, element])
            setAction("drawing");
        }
    };

    const handleMouseMove = (event) => {
        const {clientX, clientY} = event
        let id
        let index
        let updatedElement
        let elementsCopy
        if (action === "drawing") {
            index = elements.length - 1
            id = elements.length
            const x1 = elements[index].x1
            const y1 = elements[index].y1
            updatedElement = createElement(
                generator,
                x1, y1,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                selectedSticker, id
            );

            elementsCopy = [...elements]
            elementsCopy[index] = updatedElement
            setElements(elementsCopy)
        } else if (action === "selected" && selectedElement.stickerType !== "text") {
            id = selectedElement.id
            const selectInfo = selectedElement.selectInfo
            let offsetX = selectedElement.offsetX
            let offsetY = selectedElement.offsetY
            let x1 = clientX - offsetX
            let x2 = x1 + selectInfo.width
            let y1 = clientY - offsetY
            let y2 = y1 + selectInfo.height

            if (selectedElement.stickerType === "arrow") {
                if (selectInfo.arrowDirection === "topRight") {
                    x1 = clientX - offsetX
                    x2 = clientX  + (selectedElement.x2 - selectInfo.x - offsetX)
                    y1 = clientY + (selectedElement.y1 - selectInfo.y - offsetY)
                    y2 = clientY - (offsetY - (selectedElement.y2 - selectInfo.y))
                } else if (selectInfo.arrowDirection === "botRight") {
                    x1 = clientX - offsetX
                    x2 = clientX + (selectedElement.x2 - selectedElement.x1 - offsetX)
                    y1 = clientY - offsetY
                    y2 = clientY + (selectedElement.y2 - selectedElement.y1 - offsetY)
                } else if (selectInfo.arrowDirection === "topLeft") {
                    x1 = clientX + (selectedElement.x1 - selectedElement.x2 - offsetX)
                    x2 = clientX - offsetX
                    y1 = clientY + (selectedElement.y1 - selectInfo.y - offsetY)
                    y2 = clientY - (offsetY - (selectedElement.y2 - selectInfo.y))
                } else if (selectInfo.arrowDirection === "botLeft") {
                    x1 = clientX + (selectedElement.x1 - selectedElement.x2 - offsetX)
                    x2 = clientX - offsetX
                    y1 = clientY - offsetY
                    y2 = clientY + (selectedElement.y2 - selectedElement.y1 - offsetY)
                }
            }
            if (selectedElement.stickerType === "line") {
                if (selectedElement.x1 <= selectedElement.x2) {
                    x1 = clientX - offsetX
                    x2 = clientX + (selectInfo.width - offsetX)
                } else {
                    x1 = clientX + (selectInfo.width - offsetX)
                        x2 = clientX - offsetX
                }
                if (selectedElement.y1 <= selectedElement.y2) {
                    y1 = clientY - offsetY
                    y2 = clientY + (selectInfo.height - offsetY)
                } else {
                    y1 = clientY + (selectInfo.height - offsetY)
                    y2 = clientY - offsetY
                }
            }

            updatedElement = createElement(
                generator,
                x1, y1, x2, y2,
                selectedElement.stickerType, id
            );

            elementsCopy = [...elements]
            elementsCopy[id-1] = updatedElement
            setElements(elementsCopy)
            setUpdatedSticker(updatedElement)
        } else if (action === "selected") {
            id = selectedElement.id
            let offsetX = selectedElement.offsetX
            let offsetY = selectedElement.offsetY
            const canvas = document.getElementById("canvas");
            const ctx = canvas.getContext("2d");
            console.log(id)
            updatedElement = createText(
                ctx,
                {
                    font: selectedElement.font,
                    size: selectedElement.size + "px",
                    align: "left",
                    style: selectedElement.font,
                    text: selectedElement.text,
                    location: {
                      x: clientX - offsetX,
                      y: clientY - offsetY
                    },
                    stickerType: "text",
                    id: id
                  }
            )
            elementsCopy = [...textElements]
            elementsCopy[id] = updatedElement
            setTextElements(elementsCopy)
            setUpdatedSticker(updatedElement)
        }
    }

    const handleMouseUp = () => {
        setAction("none")
        setTimeout(function() {drawSelectedBox(updatedSticker, generator)}, 1)
    }

    // This comma means that the first element in the returned array is ignored, since we don't need it
    const [, takeScreenshot] = useScreenshot()

    const captureCanvas = () => {
        if (canvasRef.current) {
            return takeScreenshot(canvasRef.current)
        }
    }

    const saveCanvas = () => {
        captureCanvas().then((input) => {
            let images = JSON.parse(window.localStorage.getItem(IMAGES))
            let newEntry = {
                "image": input,
                "time_created": Date.now()
            }
            if (!images) images = []
            images.push(newEntry)
            window.localStorage.setItem(IMAGES, JSON.stringify(images))
        })
    }

    const handleShareButton = () => {
        const authToken = TwitterPostService.getToken()
        if (authToken) {
            setShowSharingPopup(true)
        } else {
            TwitterPostService.authenticate()
              .then(() => setShowSharingPopup(true))
        }
    }

    return(
        <>
            <NavBar authenticated={true} />
            {showSharingPopup &&
                <ShareWindow closePopup={() => setShowSharingPopup(false)} />
                    }
             {showClearPopup &&
                <ClearWindow
                    closePopup={() => setShowClearPopup(false)}
                    setElements={setElements}
                    setTextElements={setTextElements}
                />
            }

            <div className={styles.screenError}>
                <h1>Sorry, but it seems like your screen is too small.</h1>
                <p>Unfortunately, GetWell currently doesn't support smaller screen sizes. Please use a device that is at least 1000 pixels wide.</p>
            </div>
            {showSavePopup &&
                <SaveWindow 
                    closePopup={() => setShowSavePopup(false)}
                />}
            <div className={styles.pageContents}>
                <PropertiesSidebar
                    textInputPosition={textInputPosition}
                    setTextInputInfo={setTextInputInfo}
                    textInputInfo={textInputInfo}
                />
                <div className={styles.rightWrapper}>
                    <div className={styles.canvasWrapper}>
                        <canvas className={styles.canvas} ref={canvasCallbackRef} id="canvas" width={'800'} height={'550'}
                                onMouseDown = {handleMouseDown}
                                onMouseMove = {handleMouseMove}
                                onMouseUp = {handleMouseUp}
                                style={{backgroundColor: canvasColor}}
                                >
                            Canvas
                        </canvas>
                        <div className={styles.buttonWrapper}>
                        <Button onClick={() => {
                            setShowSavePopup(true);
                            saveCanvas();
                            }}>Save</Button>
                         <Button onClick={handleShareButton}>Share</Button>
                        <Button variant onClick={() => setShowClearPopup(true)}>Restart</Button>
                        {/* <Button onClick={() => setErrorPopup(true)}>Error</Button>
                        <Popup trigger={errorPopup} setTrigger= {setErrorPopup}>
                            <h3>Uh oh! Something went wrong, please try again later</h3>
                        </Popup> */}
                        </div>
                    </div>
                    <ActionBar
                      setSelectedSticker={setSelectedSticker}
                      setCanvasColor={setCanvasColor}
                      selectedSticker={selectedSticker}
                    />
                    <TextBox
                      textInputPosition={textInputPosition}
                      setInputPosition={setInputPosition}
                      setSelectedSticker={setSelectedSticker}
                      setTextElements={setTextElements}
                      canvasPosition={canvasPosition}
                      setInputIsEmpty={setInputIsEmpty}
                      textInputInfo={textInputInfo}
                      setTextInputInfo={setTextInputInfo}
                      id={textElements.length}
                    />
                </div>
            </div>
        </>
    )
}

export default Scrapbook
