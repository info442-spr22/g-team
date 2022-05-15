import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant, onClick, children }) {
  let classes = [styles.button]
  if (variant) classes.push(styles.variant)
  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}