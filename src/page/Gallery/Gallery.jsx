import React from 'react';
import styles from './Gallery.module.css';
import NavBar from '../../component/page-element/NavBar/NavBar'
import {IMAGES} from '../../resources/constants/storage-keys'
import ArtCard from '../../component/page-element/ArtCard/ArtCard'

function Gallery() {
    const [toDelete, setToDelete] = React.useState(null)
    const artRef = React.useRef(null)

    let artData = JSON.parse(window.localStorage.getItem(IMAGES))
    if (!artData) artData = []
    artData.sort((art1, art2) => art2.time_created - art1.time_created)
    let artCards = artData.map( ({image, time_created}) => <ArtCard src={image} key={time_created} setToDelete={setToDelete} del_key={time_created}/> )

    if (toDelete !== null) {
        artData = artData.filter(art => art.time_created !== toDelete)
        artCards = artCards.filter(art => art.key !== String(toDelete))
        window.localStorage.setItem(IMAGES, JSON.stringify(artData))
        setToDelete(null)
    }

    return(
      <div ref={artRef}>
          <NavBar authenticated={true} />
          <section className={styles.headerWrapper}>
              <div className={styles.header_txt}>
                  <h1>Gallery</h1>
              </div>
          </section>
          <section className={styles.cardsWrapper}>
              <div>
                  <hr />
              </div>
              <div className={styles.artCards}>
                  {artCards}
              </div>
          </section>
      </div>
    )
}

export default Gallery;