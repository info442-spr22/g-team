import React from 'react'
import styles from './ToolBarSticker.module.css'

function ToolBarSticker(props) {

  // select functionality
  function select(event) {
    console.log(event.key);
    if (props.hotkey === event.key) {
      props.setSelectedSticker(props.type)
    } else if (event.key === "v") {
      props.setSelectedSticker("select")
    }
  }

  // Looks for any keypress and runs select if it sees one is pressed down
  // https://devtrium.com/posts/how-keyboard-shortcut
  // modified handleKeyPress
  const handleKeyPress = React.useCallback((event) => {
    select(event);
  }, []);

  React.useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);


  function Circle() {
    return(
      <svg viewBox={"0 0 30 30"} className={styles.sticker}>
        <circle cx="15" cy="15" r="15"/>
      </svg>
    );
  }

  function Ellipse() {
    return(
      <svg viewBox={"0 0 30 30"} className={styles.sticker}>
        <ellipse cx="15" cy="15" rx="15" ry="10"/>
      </svg>
    );
  }

  function Rectangle() {
    return(
      <svg viewBox={"0 0 30 20"} className={styles.sticker}>
        <rect width="30" height="20"/>
      </svg>
    );
  }


  function Line() {
    return (
      <svg
        viewBox={"0 0 32 32"} className={styles.sticker}
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
        viewBox={"0 0 32 32"} className={styles.sticker}
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
      <svg viewBox={"0 0 16 14"} className={styles.sticker}>
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
      <svg viewBox={"0 0 48 45"} className={styles.sticker}>
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
      <svg viewBox={"0 0 32 32"} className={styles.sticker}>
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
      <svg viewBox={"0 0 30 30"} className={styles.sticker}>
        <rect width="30" height="30"/>
      </svg>
    )
  }

  let sticker;
  switch (props.type) {
    case ('circle'):
      sticker = <Circle />
      break
    case ('line'):
      sticker = <Line />
      break
    case ('ellipse'):
      sticker = <Ellipse />
      break
    case ('arrow'):
      sticker = <Arrow />
      break
    case ('triangle'):
      sticker = <Triangle />
      break
    case ('star'):
      sticker = <Star />
      break
    case ('heart'):
      sticker = <Heart />
      break
    case ('square'):
      sticker = <Square />;
      break
    case ('rectangle'):
      sticker = <Rectangle />;
      break
    default:
      return <h2>Error Message TBD</h2>
  }

  return (
    <div onClick={() => {props.setSelectedSticker(props.type)}} ref={handleKeyPress}>
      {sticker}
    </div>
  )
}

export default ToolBarSticker;