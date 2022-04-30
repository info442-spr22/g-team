import React from 'react';
import styles from './Landing.module.css';
import landing_splash from '../../resources/images/landing_splash.svg';

function Landing() {
  return(
    <div>
      <h2>Landing Page</h2>
      <section className={styles.intro}>
        <div className={styles.intro_txt}>
          <h1>GetWell</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor
             mi, consectetur sit amet placerat vel, eleifend sit amet nisl.
              Aenean vel orci ut libero dignissim ornare. Sed hendrerit lobortis
               dictum</p>
          <div><p>Get Started</p></div>
        </div>
        <div className={styles.intro_pic}>
          <img src={landing_splash} alt={"Person painting with space"} />
        </div>
      </section>
      <section className={styles.key_feat}>
        <h2>Key Features</h2>
      </section>
      <section className={styles.our_team}>
        <h2>Our Team</h2>
      </section>
      <section className={styles.insp}>
        <h3>Inspiration</h3>
      </section>
    </div>
  );
}

export default Landing;