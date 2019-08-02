import React, { Fragment } from 'react'

import Header from '../Header'
import NavBar from '../Navbar'
import Footer from '../Footer'

const Layout = ({
  children
}) => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <main className="Layout" role="main">
        { children }
      </main>
      <Footer />
    </Fragment>
  )
}

export default Layout
