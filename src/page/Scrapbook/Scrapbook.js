import React, { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";
import NavBar from '../../component/page-element/NavBar/NavBar'

const generator = rough.generator();

// allow users to draw line element for now, use as testing
function createElement(x1, y1, x2, y2) {
    const roughElement = generator.line(x1, y1, x2, y2);
    return {x1, y1, x2, y2, roughElement };
}

const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);
    const [windowDimensions, setWindowDimensions] = React.useState({})
    const [canvasPosition, setCanvasPosition] = React.useState({x: 0, y:0})

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
          clientX - canvasPosition.x, clientY - canvasPosition.y,
          clientX - canvasPosition.x, clientY - canvasPosition.y
        );
        setElements((prevState) => [...prevState, element])
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

        const { clientX, clientY} = event
        const index = elements.length - 1
        const { x1, y1 } = elements[index]
        const updatedElement = createElement(x1, y1, clientX - canvasPosition.x, clientY - canvasPosition.y)

        const elementsCopy = [...elements]
        elementsCopy[index] = updatedElement
        setElements(elementsCopy)

    }

    const handleMouseUp = () => {
        setDrawing(false);
    }

    return(
            <canvas id="canvas" width = {window.innerWidth} height= {window.innerHeight}
                onMouseDown = {handleMouseDown}
                onMouseMove = {handleMouseMove}
                onMouseUp = {handleMouseUp}
            >
                Canvas
            </canvas>
    )
}

export default Scrapbook



