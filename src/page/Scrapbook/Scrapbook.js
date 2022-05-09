import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from './Scrapbook.module.css'
import rough from "roughjs/bundled/rough.esm";
import NavBar from '../../component/page-element/NavBar/NavBar'
import PropertiesSidebar from '../../component/page-element/PropertiesSidebar/PropertiesSidebar'
import ActionBar from '../../component/page-element/ActionBar/ActionBar'
import createElement from '../../utils/CreateElement'

const generator = rough.generator();

const stickerHotKeys = [
    {"name": "circle", "hotkey": "c"},
    {"name": "ellipse", "hotkey": "e"},
    {"name": "square", "hotkey": "s"},
    {"name": "rectangle", "hotkey": "r"},
    {"name": "line", "hotkey": "l"},
    // {"name": "arrow", "hotkey": "a"},
    {"name": "triangle", "hotkey": "shift + t"},
    // {"name": "star", "hotkey": "x"},
    // {"name": "heart", "hotkey": "h"}
]

const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);
    const [windowDimensions, setWindowDimensions] = React.useState({})
    const [canvasPosition, setCanvasPosition] = React.useState({x: 0, y:0})
    let selectedSticker = 'arrow'

    let canvasRef = React.useCallback(canvas => {
        if (canvas !== null) {
            let posInfo = canvas.getBoundingClientRect()
            setCanvasPosition({x: posInfo.x, y: posInfo.y})
        }
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

    }, [elements]);

    // mouse tracking
    const handleMouseDown = (event) => {
        setDrawing(true);

        // Starting pt is clientX, clintY and first create element end pt is same as start pt
        const { clientX, clientY} = event;
        const element = createElement(
          generator,
          clientX - canvasPosition.x, clientY - canvasPosition.y,
          clientX - canvasPosition.x, clientY - canvasPosition.y,
          selectedSticker,
          {}
        );
        setElements((prevState) => [...prevState, element])
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

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

    const handleMouseUp = () => {
        setDrawing(false);
    }

    return(
        <>
            <NavBar authenticated={true} />
            <div className={styles.pageContents}>
                <PropertiesSidebar />
                <div className={styles.rightWrapper}>
                    <div className={styles.canvasWrapper}>
                        <canvas ref={canvasRef} id="canvas" width={'800'} height={'550'}
                                onMouseDown = {handleMouseDown}
                                onMouseMove = {handleMouseMove}
                                onMouseUp = {handleMouseUp}
                                >
                            Canvas
                        </canvas>
                    </div>
                    <ActionBar />
                </div>
            </div>
        </>
    )
}

export default Scrapbook
