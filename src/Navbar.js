import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

const Navbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    Dave Rules Example
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar