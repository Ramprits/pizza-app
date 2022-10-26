import React from 'react'
import { HeaderMegaMenu } from './Header'

const Layout = ({ children }) => {
    return (
        <>
            <HeaderMegaMenu />
            {children}
        </>
    )
}

export default Layout