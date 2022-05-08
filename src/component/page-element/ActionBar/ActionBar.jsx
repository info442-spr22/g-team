import React, {useState} from "react";
import Button from 'react-bootstrap/Button'
import styles from "./ActionBar.module.css"

export default function ActionBar(props) {
  const [selected, setSelected] = useState(false);
  return(
    <div className={styles.wrapper}>
    <div className={styles.actionBar}>
        <Button
          className="selectButton"
          variant="outline-dark"
          onClick={() => setSelected(true)}
          active
        >
          Selected
        </Button>
    </div>
    

  </div>

  );
}