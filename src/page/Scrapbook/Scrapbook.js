import React, { useLayoutEffect, useState } from "react";
import rough from "roughjs/bundled/rough.esm";

const generator = rough.generator();

// allow users to draw line element for now, use as testing
function createElement(x1, y1, x2, y2) {
    const roughElement = generator.line(x1, y1, x2, y2);
    return {x1, y1, x2, y2, roughElement };
}

const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        // Re-rendering everytime clicks
        ctx.clearReact(0, 0, canvas.width, canvas.height);

        const roughCanvas = rough.canvas(canvas);



        elements.forEach(({ roughElement }) => roughCanvas.draw(roughElement));

    }, [elements]);

    // mouse tracking
    const handleMouseDown = (event) => {
        setDrawing(true);

        // Starting pt is clientX, clintY and first create element end pt is same as start pt
        const { clientX, clientY} = event;
        const element = createElement(clientX, clientY, clientX, clientY);
        setElements((prevState) => [...prevState, element]);
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

        const { clientX, clientY} = event;
        const index = elements.length - 1;
        const { x1, y1 } = elements[index];
        const updatedElement = createElement(x1, y1, clientX, clientY);

        const elementsCopy = [...elements];
        elementsCopy[index] = updatedElement;
        setElements(elementsCopy);

    };

    const handleMouseUp = () => {
        setDrawing(false);
    };

    return(
            <canvas id="canvas" width = {window.innerWidth} height= {window.innerHeight}
                onMouseDown = {handleMouseDown}
                onMouseMove = {handleMouseMove}
                onMouseUp = {handleMouseUp}
            >
                Canvas
            </canvas>
    );
};

export default Scrapbook;



