import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppColors } from '../themes/color'
import { Login } from '../login/login';
import MyDrawer from '../drawer/drawer';
import { Register } from '../register/Register';

export default function Topbar() {
 
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = (status) => {
        setOpen(status);
    };

    function slide () {
        console.log('abc')
        // setOpen(false);
        handleClickOpen(false)
    };
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ backgroundColor: AppColors.themePrimaryColor }} >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    onClick={()=>handleClickOpen(true)}
                    >
                        <div >
                            {/* {MyDrawer (open, slide)} */}
                            <MenuIcon />

                        </div>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        KARAYANA
                    </Typography>
                    <Button color="inherit" style={{ marginRight: 50, borderColor: 'white', borderWidth: 2 }}>Rent Your Car </Button>
                    {/* <Button onClick={ Login('Login')} color="inherit">Login</Button> */}
                    <div>
                        {Register('Login')}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}