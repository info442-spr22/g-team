import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from './Scrapbook.module.css'
import NavBar from '../../component/page-element/NavBar/NavBar'
import PropertiesSidebar from '../../component/page-element/PropertiesSidebar/PropertiesSidebar'
import ActionBar from '../../component/page-element/ActionBar/ActionBar'


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
          <div className={styles.pageContents}>
              <PropertiesSidebar />
              <div className={styles.rightWrapper}>
                  <div className={styles.canvasWrapper}>
                      <canvas id="canvas" width = {'800'} height= {'550'}
                              onMouseDown = {handleMouseDown}
                              onMouseMove = {handleMouseMove}
                              onMouseUp = {handleMouseUp}>
                          Canvas
                      </canvas>
                  </div>
                  <ActionBar />
              </div>
          </div>
      </>
    );
};

export default Scrapbook;