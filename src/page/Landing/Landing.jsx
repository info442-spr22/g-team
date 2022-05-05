import React from 'react';
import styles from './Landing.module.css';
import landing_splash from '../../resources/images/landing_splash.svg';
import palette from '../../resources/images/palette.svg';
import lightbulb from '../../resources/images/lightbulb.svg';
import pencil from '../../resources/images/pencil.svg';
import temp_team_pic from '../../resources/images/temp_team_pic.svg';
import Sharlene from '../../resources/images/Sharlene.jpg';
import Niha from '../../resources/images/Niha.jpg';
import Shane from '../../resources/images/Shane.jpg';
import Daniel from '../../resources/images/Daniel.jpg';
import NavBar from '../../component/page-element/NavBar/NavBar'

function Landing() {
  return(
    <div>
      <NavBar authenticated={false} />
      <section className={styles.intro}>
        <div className={styles.intro_txt}>
          <h1>GetWell</h1>
          <p>Get creative with GetWell. GetWell combines journaling and art,
          turning it into a digital scrapbooking experience for you to create spreads,
          share it with your friends, and transform your thoughts into art.</p>
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
            <h2>Create</h2>
            <p>Let your creativity run free and make digital art</p>
          </div>
          <div>
            <img src={pencil} alt={"Pencil"} />
            <h2>Journal</h2>
            <p>Write about your day, feelings, or anything you want</p>
          </div>
          <div>
          <img src={lightbulb} alt={"Lightbulb"} />
            <h2>Share</h2>
            <p>Display your work to friends on social media</p>
          </div>
        </div>
      </section>
      <section className={styles.our_team}>
          <h2>Our Team</h2>
          <div>
            <div>
              <img src={Daniel} alt={"Daniel"} />
              <h2>Daniel Cavazos</h2>
              <p>Developer</p>
            </div>
            <div>
              <img src={temp_team_pic} alt={"Kexin"} />
              <h2>Kexin Pei</h2>
              <p>Developer</p>
            </div>
            <div>
              <img src={Shane} alt={"Shane"} />
              <h2>Shane Fretwell</h2>
              <p>Developer</p>
            </div>
          </div>
          <div>
            <div>
              <img src={Niha} alt={"Niha"} />
              <h2>Niha Gaddam</h2>
              <p>Project Manager</p>
            </div>
            <div>
              <img src={Sharlene} alt={"Sharlene"} />
              <h2>Sharlene Fang</h2>
              <p>Product Designer</p>
            </div>
          </div>
      </section>
      <section className={styles.insp}>
        <span>
          <h3>Inspiration</h3>
          <p>
          Our team was motivated by our passion for solving issues relating to mental
          health and ways we can emphasize its importance. After doing some research, we
          found that the pandemic has exacerbated the unique stressors that fall on women
          in tech, leading to poor mental health outcomes. Inspired by this problem space,
          we wanted to create a solution that would be both fun and therapeutic for women
          to vent and turn negative energy into creative energy. Our solution, GetWell,
          is a platform for journaling and creating artworks, which allows users to alleviate
          their mental distress through scrapbooking.
          </p>
        </span>
      </section>
    </div>
  );
}

export default Landing;