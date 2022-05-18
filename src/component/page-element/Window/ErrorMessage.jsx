import React from 'react';
import styles from './ErrorMessage.module.css'

export default function ErrorMessage(props) {
      return (props.trigger) ? (
        <div className={"popup " + styles.ErrorMessage}>
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>x</button>
                    { props.children }
                <button>Retry</button>
            </div>
        </div>
    ) : "";
}