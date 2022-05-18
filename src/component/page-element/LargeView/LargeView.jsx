import React from 'react'
import styles from './LargeView.module.css'
import { X } from 'react-bootstrap-icons'
import Button from '../Button/Button'


export default function LargeView(props) {
  const [trans, setTrans] = React.useState({top: 0, right: 0, bottom: 0, left: 0})


  let ref = React.useRef(null)

  React.useEffect(() => {
    setTrans(ref.current.getBoundingClientRect())
  }, [ref])

  return(
    <div>
          <div className={styles.largeBorder} ref={ref}>
            <img
              src={props.src} alt={'One of your saved scrapbooking entries'}
              className={styles.largeCard}
            />
          </div>
          <div className={styles.closeBtn}>
              <X size='32px' style={{
                top: trans.top,
                right: trans.left,
                position: "fixed"
              }}
                onClick={function() {
                  props.setLargeView(false)
                }}/>
          </div>
          <div>
            <Button style={{
              bottom: trans.top,
              left: trans.left + trans.width / 2,
              position: "fixed",
              transform: "translate(-140%, 110%)"
            }} children={"Share"}/>
            <Button style={{
              bottom: trans.top,
              left: trans.left + trans.width / 2,
              position: "fixed",
              transform: "translate(0, 110%)"
            }} children={"Discard"} variant={true}
            onClick={function() {
              props.setToDelete(props.del_key)
              props.setLargeView(false)
            }}/>
          </div>
        </div>
  )
}