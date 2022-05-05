import React from 'react';
import styles from './ObjectToolBar.module.css';
import { useCallback, useEffect } from 'react';

function ObjectToolBarStickers(props) {

  // select functionality
  function select(event) {
    if (event.type === "click") {
      console.log("Click select functionality TBD");
    } else if (event.type === "keydown" && event.key === "c") {
      console.log("Circle shortcut select functionality TBD");
    }
  }

  // Looks for any keypress and runs select if it sees one is pressed down
  // https://devtrium.com/posts/how-keyboard-shortcut
  // modified handleKeyPress
  const handleKeyPress = useCallback((event) => {
    select(event);
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  function Circle() {
    return(
      <svg height = "30" width = "30" className={styles.sticker} onClick={select}>
        <circle cx="15" cy="15" r="15"/>
      </svg>
    );
  }

  if (props.type === "circle") {
    return <Circle />;
  } else {
    return <h2>Error Message TBD</h2>;
  }
}

export default ObjectToolBarStickers;