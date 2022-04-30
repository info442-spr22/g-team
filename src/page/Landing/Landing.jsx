import React from 'react';
import styles from './Landing.module.css';
import landing_splash from '../../resources/images/landing_splash.svg';
import palette from '../../resources/images/palette.svg';
import lightbulb from '../../resources/images/lightbulb.svg';
import pencil from '../../resources/images/pencil.svg';

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
        <div className={styles.features}>
          <div>
            <img src={palette} alt={"Art Color Palette"} />
            <h2>Feature 1</h2>
            <p>Description about this feature</p>
          </div>
          <div>
            <img src={lightbulb} alt={"Lightbulb"} />
            <h2>Feature 2</h2>
            <p>Description about this feature</p>
          </div>
          <div>
            <img src={pencil} alt={"Pencil"} />
            <h2>Feature 3</h2>
            <p>Description about this feature</p>
          </div>
        </div>
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