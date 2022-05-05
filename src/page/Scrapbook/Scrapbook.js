import React, { useEffect, useLayoutEffect, useRef, useState } from "react";



const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.clearReact(0, 0, canvas.width, canvas.height);

        const Canvas = canvas(canvas);

    });

    const handleMouseDown = (event) => {
        setDrawing(true);
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;
    };

    const handleMouseUp = () => {}

    return(
        <canvas id="canvas" width = {window.innerWidth} height= {window.innerHeight}>
            Canvas
        </canvas>
    );
};

export default Scrapbook;