import '../styles/globals.css'
import Link from 'next/link'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <nav className='flex mr-2'>
      <ul>  
       
          <div> 
            <img src="# " alt="brand" />
            <p> Pizza Shop </p>
            </div>
            
            <Link href="/"><a><li> Home </li></a></Link>
            <Link href="/about"><a><li> About </li></a></Link>
      </ul>
    </nav>
    <div> 
      <Component {...pageProps} />
    </div>
    </>
  )
}

export default MyApp
