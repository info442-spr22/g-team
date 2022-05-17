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
import Window from '../../component/page-element/Window/Window'
import { useScreenshot } from "use-react-screenshot";
import {IMAGES} from '../../resources/constants/storage-keys'

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
    const [textInputPosition, setInputPosition] = React.useState({})
    const [inputIsEmpty, setInputIsEmpty] = React.useState(false)
    const [textInputInfo, setTextInputInfo] = React.useState({
        font: "Comic Sans MS",
        size: "30",
        style: "black"
    })
    // const [selectedElement, setSelectedElement] = React.useState(null) uncomment for object property changing
    const [showSharingPopup, setShowSharingPopup] = React.useState(false)

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

    }, [elements, textElements]);

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
                // setSelectedElement(element)
                drawSelectedBox(element, generator);
            } else {
                // reset action to none
                setAction('none')
                // remove the selected element
                // setSelectedElement(null)
            }
        } else if (selectedSticker === "text") {
            if (!textInputPosition.x) {
                setInputPosition({x: clientX, y: clientY})

                setAction("texting")

                setSelectedSticker("select")
            }
        } else {
            // Starting pt is clientX, clintY and first create element end pt is same as start pt

            const element = createElement(
                generator,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                selectedSticker,
                {}
            );
            setElements((prevState) => [...prevState, element])

            setAction("drawing");
        }
    };

    const handleMouseMove = (event) => {

        if (action === "drawing") {
            const { clientX, clientY} = event
            const index = elements.length - 1
            const { x1, y1 } = elements[index]
            const updatedElement = createElement(
                generator,
                x1, y1,
                clientX - canvasPosition.x, clientY - canvasPosition.y,
                selectedSticker,
                {}
            )

            const elementsCopy = [...elements]
            elementsCopy[index] = updatedElement
            setElements(elementsCopy)
        }
    }

    const handleMouseUp = () => {
        setAction("none");
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

    return(
        <>
            <NavBar authenticated={true} />
            {showSharingPopup &&
                <Window closePopup={() => setShowSharingPopup(false)} />
            }
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
                                >
                            Canvas
                        </canvas>
                        <div className={styles.buttonWrapper}>
                        <Button onClick={saveCanvas}>Save</Button>
                        <Button onClick={() => setShowSharingPopup(true)}>Share</Button>
                        <Button variant>Restart</Button>
                        </div>
                    </div>
                    <ActionBar
                      setSelectedSticker={setSelectedSticker}
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
                    />
                </div>
            </div>
        </>
    )
}

export default Scrapbook
