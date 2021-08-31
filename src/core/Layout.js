import React from 'react'
import { Footer } from '../components/Footer/Footer'
import { Menu } from '../components/Menu/Menu'


const Layout = ({ title = 'title', className, children }) => {

    return (
        <div className="layout">
          <title>{title}</title>
          <Menu />
          <div className="body">{children}</div>
          <Footer />
        </div>
    )
}

export default Layout;