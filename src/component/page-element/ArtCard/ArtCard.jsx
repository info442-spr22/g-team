import React from 'react'
import styles from './ArtCard.module.css'
import { X } from 'react-bootstrap-icons'

/*
props {
  src: A Base64 encoded string or image URI
}
 */

export default function ArtCard(props) {
  const [largeView, setLargeView] = React.useState(false)

  const ref = React.useRef(null)

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
        <div>
          <div className={styles.largeBorder} ref={ref}>
            <img
              src={props.src} alt={'One of your saved scrapbooking entries'}
              className={styles.largeCard}
            />
          </div>
          <div className={styles.closeBtn}>
              <X size='32px' style={{transform: "translate(" + [, ] +  ")"}}
                onClick={(e) => {
                  console.log(e.target.parentNode.parentNode)
                }}/>
          </div>
        </div>
      }
    </>
  )
}