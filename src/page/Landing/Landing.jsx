import React from 'react';
import styles from './Landing.module.css';

function Landing() {
  return(
    <div>
      <h2>Landing Page</h2>
      <section className={styles.intro}>
        <div className={styles.intro_txt}>
          <h1>GetWell</h1>
          <p>Lorem ipsum</p>
          <div>Button</div>
        </div>
        <div className={styles.intro_pic}>

        </div>
      </section>
      <section className={styles.key_feat}></section>
      <section className={styles.our_team}></section>
      <section className={styles.insp}></section>
    </div>
  );
}

export default Landing;