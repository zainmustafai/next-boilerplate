import Head from 'next/head'
import React from 'react'


const Layout = ({children}) => {
    return (

        <div className='layout'>
            <Head>
                <title>Zainfolio</title>
                <header>
                </header>
                <main>
                    {children}
                </main>
                <footer>
                </footer>
            </Head>
        </div>
    )
}

export default Layout