import React from 'react'
import styles from "./NavBar.module.css"
import * as urls from '../../../resources/constants/url-endpoints'
import {Link, NavLink} from 'react-router-dom'

/*
Props {
  authenticated: boolean
}
*/

export default function NavBar({ authenticated }) {
  let links = [
    {to: urls.LANDING, text: 'Home'},
    {to: urls.SCRAPBOOK, text: 'Scrapbook'},
    {to: urls.GALLERY, text: 'Gallery'},
  ]
 /* if (authenticated) {
    links.push({ to: urls.GALLERY, text: 'Gallery' })
  }*/

  const activeClass = styles.link + ' ' + styles.active

  let linkElements = links.map((link) =>
    <NavLink
      to={'/' + link.to}
      className={({ isActive }) => isActive ? activeClass : styles.link}
      key={link.text}
    >
      {link.text}
    </NavLink>
  )

  return (
    <div className={styles.bar}>
      <h1 className={styles.title}>GetWell</h1>
      {linkElements}
      {!authenticated &&
        <>
          <button className={styles.button + ' ' + styles.variant}>
            <Link to={'/' + urls.AUTH}>Log In</Link>
          </button>
          <button className={styles.button}>
            <Link to={'/' + urls.AUTH}>Sign Up</Link>
          </button>
        </>
      }
    </div>
  )
}