import React from 'react'
import styles from './ToolBarSticker.module.css'

function ToolBarSticker(props) {

  // select functionality
  function select(event) {
    console.log("Click select functionality TBD")
  }

  function Circle() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <circle cx="15" cy="15" r="15"/>
      </svg>
    );
  }

  function Ellipse() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <ellipse cx="15" cy="15" rx="15" ry="10"/>
      </svg>
    );
  }

  function Line() {
    return (
      <svg
        width="32" height="32" className={styles.sticker} onClick={select}
        strokeLinecap="round" strokeWidth="2">

        <path
          fill="none"
          stroke="black"
          d="
            M 2 30
            L 30 2
          " />
      </svg>
    )
  }

  function Arrow() {
    return (
      <svg
        width="32" height="32" className={styles.sticker} onClick={select}
        strokeLinecap="round" strokeWidth="2"
      >
        <path
          fill="none"
          stroke="black"
          d="
            M 2 30
            L 30 2
          " />
        <path
          fill="none"
          stroke="black"
          d="
            M 20 2
            H 30
            V 12
          " />
      </svg>
    )
  }

  function Triangle() {
    return (
      <svg width="16" height="14" className={styles.sticker} onClick={select}>
        <path d="
          M 8 0
          L 16 14
          H 0
          Z
          " />
      </svg>
    )
  }

  function Star() {
    return (
      <svg width="48" height="45" className={styles.sticker} onClick={select}>
        <path d="
          M 24 0
          L 18 18
          H 0
          L 15 28
          L 9 45
          L 24 35
          L 38 45
          L 33 28
          L 48 18
          H 30
          L 24 0 Z
          " />
      </svg>
    )
  }

  function Heart() {
    return(
      <svg height = "32" width = "32" className={styles.sticker} onClick={select}>
        <path d="
          M 0,10
          A 5,5 0,0,1 16,10
          A 5,5 0,0,1 32,10
          Q 32,20 16,30
          Q 0,20 0,10 z
          "/>
      </svg>
    )
  }

  function Square() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <rect width="30" height="30"/>
      </svg>
    )
  }

  switch (props.type) {
    case ('circle'): return <Circle />
    case ('line'): return <Line />
    case ('ellipse'): return <Ellipse />
    case ('arrow'): return <Arrow />
    case ('triangle'): return <Triangle />
    case ('star'): return <Star />
    case ('heart'): return <Heart />
    case ('square'): return <Square />;
    default:
      return <h2>Error Message TBD</h2>
  }
}

export default ToolBarSticker;