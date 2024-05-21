import React from 'react';
import Header from './Header';
import '../globals.css'
const Layout =({children}) =>{
    return(
        <>
        <div>
            <Header/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;