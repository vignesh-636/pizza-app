import Head from 'next/head'
import React from 'react'
import styles from  './Layout.module.css'

function Layout({children}) {
    return (
        <div className={styles.container}>
            <Head > 
                <title> Pizza Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}> 
                {children}
            </main>

            <footer className={ styles.footer}> Made by Cocoa.</footer>

        </div>
    )
}

export default Layout
