import React from 'react';
import styles from './Gallery.module.css';
import NavBar from '../../component/page-element/NavBar/NavBar'
import {IMAGES} from '../../resources/constants/storage-keys'
import ArtCard from '../../component/page-element/ArtCard/ArtCard'

function Gallery() {
    let artData = JSON.parse(window.localStorage.getItem(IMAGES))
    artData.sort((art1, art2) => art2.time_created - art1.time_created)
    let artCards = artData.map( ({image, time_created}) => <ArtCard src={image} key={time_created} /> )

    return(
      <div>
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