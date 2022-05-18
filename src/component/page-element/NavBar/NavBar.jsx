import React from 'react'
import styles from "./NavBar.module.css"
import * as urls from '../../../resources/constants/url-endpoints'
import {Link, NavLink} from 'react-router-dom'
import Button from '../Button/Button'

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
      {/* {!authenticated &&
        <>
          <Link to={'/' + urls.AUTH}>
            <Button variant>Log In</Button>
          </Link>
          <Link to={'/' + urls.AUTH}>
            <Button>Sign Up</Button>
          </Link>
        </>
      } */}
    </div>
  )
}