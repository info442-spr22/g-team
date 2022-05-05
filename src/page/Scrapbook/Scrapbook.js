import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import NavBar from '../../component/page-element/NavBar/NavBar'
import PropertiesSidebar from '../../component/page-element/PropertiesSidebar/PropertiesSidebar'



const Scrapbook = () => {
    const [elements, setElements] = useState([]);
    const [drawing, setDrawing] = useState(false);

    useLayoutEffect(() => {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);


    });

    const handleMouseDown = (event) => {
        setDrawing(true);
    };

    const handleMouseMove = (event) => {
        if(!drawing) return;

        const { clientX, clientY} = event;
        console.log(clientX,clientY);
    };

    const handleMouseUp = () => {
        setDrawing(false);
    };

    return(
        <>
            <NavBar authenticated={true} />
            <PropertiesSidebar />
            <canvas id="canvas" width = {window.innerWidth} height= {window.innerHeight}
                    onMouseDown = {handleMouseDown}
                    onMouseMove = {handleMouseMove}
                    onMouseUp = {handleMouseUp}>
                Canvas
            </canvas>
        </>
    );
};

export default Scrapbook;