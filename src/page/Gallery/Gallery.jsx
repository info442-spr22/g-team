import React from 'react';
import styles from './Gallery.module.css';
import NavBar from '../../component/page-element/NavBar/NavBar'

function Gallery() {
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

        </div>
        
    </section>
        
       












        </div>  
    )
}

export default Gallery;