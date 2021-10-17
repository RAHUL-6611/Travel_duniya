import React from 'react'
import { AppBar, Toolbar, Typography, Box, InputBase} from '@material-ui/core'
import { Autocomplete } from '@react-google-maps/api';
import SearchIcon from '@material-ui/icons/Search'

import useStyles from './styles.js'

const Header = ({onLoad, onPlaceChanged}) => {
    const classes = useStyles()

    return (
        <div>
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography variant="h5">
                    Duniya Ghumo </Typography>

                    <Box display="flex">
                        <Typography variant="h6" className={classes.title}>#yourtravelpartner💖</Typography>
                                {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
                                    <div className={classes.search}>
                                    <div className={classes.searchIcon}>
                                        <SearchIcon/>
                                    </div>
                                    <InputBase placeholder="search.." classes={{ root : classes.inputRoot, input : classes.inputInput}}/>
                                    </div>
                                {/* </Autocomplete> */}
                    </Box>
            </Toolbar>
        </AppBar>            
        </div>
    )
}

export default Header
