import * as React from 'react'

// Components
import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout