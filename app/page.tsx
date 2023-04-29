import React from 'react';
import Link from 'next/link';
import  styles from './page.module.css';

/**
 * Renders the page component
 * @param {PageProps} props - The props for the page component
 * @return {JSX.Element} The rendered page component
 */

interface HomePageProps {
  // Define any props here
}

const HomePage = (): JSX.Element => {
  return (
    <div className={styles.container}>
    <h1 className={styles.homeh1}>Welcome to my GitHub meta data</h1>
    <div>
    <ul className={styles.homeul}>
      <li className={styles.card}><Link className= {styles.link} href="/"> Home</Link></li>
      <li className={styles.card}><Link className= {styles.link} href="/about"> About</Link></li>
      <li className={styles.card}><Link className= {styles.link} href="/projects">Projects</Link></li>
      <li className={styles.card}><Link className= {styles.link} href="/projects/team">Team</Link></li>
      <li className={styles.card}><Link className= {styles.link} href="/contact">Contact</Link></li>
    </ul>
    </div>
    <p className={styles.homep}>
      This is my GitHub meta data and personal portfolio page. Having a system engineer background, 
      I am coming from the jungle comparing to computer science coders.
      I love to learn new things and improve my skills.
    </p>

    </div>
  )
}

export default HomePage;
