import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='title' color='inherit'>
                        Nav Component (will change from Material UI to another framwork later)
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}


export default NavBar
