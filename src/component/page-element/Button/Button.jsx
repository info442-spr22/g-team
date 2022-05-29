import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant, clear, noclear, onClick, save, children, landing, style }) {
  let classes = [styles.button]

  if (variant) classes.push(styles.variant)
  if (landing) classes.push(styles.landing)
  if (clear) classes.push(styles.clear)
  if (noclear) classes.push(styles.noclear)
  if (save) classes.push(styles.save)
  return (
    <button
      className={classes.join(' ')}
      style={style}
      onClick={onClick}
    >
      {children}
    </button>
  )
}