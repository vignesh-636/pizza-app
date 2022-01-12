import '../styles/globals.css'
import Link from 'next/link'
import styles from '../styles/MyApp.module.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className= {styles.navbar}>
      <ul className={styles.navbarContactBox}>  
        
          <div className={ styles.brandPizza}> 
            <img src="/image/pizza.png" alt="brand" />
            <p> Pizza Shop </p>
            </div>
           
            <Link href="/"><a><li className={styles.navbarContact}> Home </li></a></Link>
            <Link href="/about"><a><li className={styles.navbarContact}> About </li></a></Link>
      </ul>
    </nav>
    <div className={styles.container}> 
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
