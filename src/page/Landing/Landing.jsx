import React from 'react';
import styles from './Landing.module.css';
import landing_splash from '../../resources/images/landing_splash.svg';
import palette from '../../resources/images/palette.svg';
import lightbulb from '../../resources/images/lightbulb.svg';
import pencil from '../../resources/images/pencil.svg';
import temp_team_pic from '../../resources/images/temp_team_pic.svg';
import NavBar from '../../component/page-element/NavBar/NavBar'

function Landing() {
  return(
    <div>
      <NavBar authenticated={false} />
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
          <div>
            <div>
              <img src={temp_team_pic} alt={"Temporary spot for member"} />
              <h2>Daniel Cavazos</h2>
              <p>Short description about self</p>
            </div>
            <div>
              <img src={temp_team_pic} alt={"Temporary spot for member"} />
              <h2>Sharlene Fang</h2>
              <p>Short description about self</p>
            </div>
            <div>
              <img src={temp_team_pic} alt={"Temporary spot for member"} />
              <h2>Shane Fretwell</h2>
              <p>Short description about self</p>
            </div>
          </div>
          <div>
            <div>
              <img src={temp_team_pic} alt={"Temporary spot for member"} />
              <h2>Niha Gaddam</h2>
              <p>Short description about self</p>
            </div>
            <div>
              <img src={temp_team_pic} alt={"Temporary spot for member"} />
              <h2>Kexin Pei</h2>
              <p>Short description about self</p>
            </div>
          </div>
      </section>
      <section className={styles.insp}>
        <span>
          <h3>Inspiration</h3>
          <p>
            Maybe a paragraph about the context of our project and how it came to
            be. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dolor
            mi, consectetur sit amet placerat vel, eleifend sit amet nisl. Aenean
            vel orci ut libero dignissim ornare. Sed hendrerit lobortis
            dictum.
          </p>
        </span>
      </section>
    </div>
  );
}

export default Landing;