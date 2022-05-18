import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant, onClick, landing, children }) {
  let classes = [styles.button]
  if (variant) classes.push(styles.variant)
  if (landing) classes.push(styles.landing)
  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}