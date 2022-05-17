import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant, clear, noclear, onClick, children }) {
  let classes = [styles.button]
  if (variant) classes.push(styles.variant)
  if (clear) classes.push(styles.clear)
  if (noclear) classes.push(styles.noclear)
  return (
    <button
      className={classes.join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}