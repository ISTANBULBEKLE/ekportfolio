import React from 'react';
import  styles from './page.module.css';

/**
 * Renders the home page.
 * 
 * @param {HomePageProps} props - The props object.
 * @param {object} props.styles - The styles object containing the card class.
 * @returns {JSX.Element} - The rendered home page.
 */

type HomePageProps = {
};

const HomePage = (): JSX.Element => {
  return (
    <div className={`${styles.imageContainer} container-fluid`}>
          <h5 className="">Welcome to my GitHub meta data</h5>
          <p className={styles.p}>
            This is my GitHub meta data and personal portfolio page. Having a system engineer background, 
            I am coming from the jungle comparing to computer science coders.
            I love to learn new things and improve my skills..</p>
          <p className=""><small>Last updated 3 mins ago</small></p>
    </div>
    
  )
}

export default HomePage;
