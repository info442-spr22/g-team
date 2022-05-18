import React from 'react'
import styles from './ArtCard.module.css'
import LargeView from '../LargeView/LargeView'

/*
props {
  src: A Base64 encoded string or image URI
}
 */

export default function ArtCard(props) {
  const [largeView, setLargeView] = React.useState(false)

  return (
    <>
      <div
        className={styles.cardBorder}
        onClick={() => {setLargeView(true)}}
      >
        <img
          src={props.src} alt={'One of your saved scrapbooking entries'}
          className={styles.card}
        />
      </div>
      {largeView &&
        /* The below empty element will be replaced with the expanded view of this art piece when implementing issue #103 */
        <LargeView src={props.src} setLargeView={setLargeView} del_key={props.del_key} setToDelete={props.setToDelete}/>
      }
    </>
  )
}