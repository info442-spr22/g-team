import React from 'react'
import styles from './Button.module.css'

export default function Button({ variant, onClick, children, style }) {
  let classes = [styles.button]

  if (variant) classes.push(styles.variant)
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