import React from 'react'
import styles from "./NavBar.module.css"
import * as urls from '../../../resources/constants/url-endpoints'
import {Link, NavLink} from 'react-router-dom'

/*
Props {
  authenticated: boolean
}
*/

export default function NavBar(props) {
  let links = [
    {to: urls.LANDING, text: 'Home'},
    {to: urls.SCRAPBOOK, text: 'Scrapbook'},
  ]
  if (props.authenticated) {
    links.push({ to: urls.PROFILE, text: 'Profile' })
  }

  let linkElements = links.map((link) =>
    <NavLink to={'/' + link} key={link.id}>
      {link.text}
    </NavLink>
  )

  return (
    <div className={styles.bar}>
      <h1 className={styles.title}>GetWell</h1>
      {linkElements}
      {!props.authenticated &&
        <button>
          <Link to={'/' + urls.AUTH} />
        </button>
      }
    </div>
  )
}