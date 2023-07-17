import React from 'react';
import { Button, Card, Dialog, AppBar, Toolbar, IconButton, Typography, Slide, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AppColors } from '../themes/color';
import { useMediaQuery } from '../hooks/useMediaQuery';
import connection from '../../network/connection';
import { getCookie, setCookie } from '../cookies/CreateCookies';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function Register(text, selDate) {
    const isRowBased = useMediaQuery('(min-width: 700px)');
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState('');
    // const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const hitApiRegister = async (email) => {

        console.log(email, 'email')
        const result = await connection.postAPI('register', { 'email': email })
        console.log(result)
        if (result.status) {
            const token = result.secret

            try {
                 setCookie('yatharth', token, 1)
                
            } catch (error) {
                console.log(error, '1')
            }
            try {
                const savedCookie = getCookie('yatharth')
                console.log(savedCookie, 'saved')
            } catch (error) {
                console.log(error, '2')
            }

            

        }
        else {

        }

    }

    const registerView = (text, selDate) => {
        return (
            <Card variant={isRowBased ? "outlined" : ''} className="card" elevation={0} style={{ padding: 30 }}>
                <TextField value={email} onChange={(event) => { setEmail(event.target.value) }} style={{ width: '100%' }} placeholder='Enter Email' id="outlined-basic" label="Enter Email" variant="outlined" />
                <TextField style={{ width: '100%', marginTop: 30 }} id="outlined-basic" label="Enter Password" variant="outlined" />
                <Button onClick={() => hitApiRegister(email)} variant="text" style={{ color: AppColors.themesWhiteColor, backgroundColor: AppColors.themePrimaryColor, width: '100%', marginTop: 30 }}>
                    {'text'}
                </Button>
            </Card>

        )
    }

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} style={{ color: AppColors.themesWhiteColor }}>
                {text}
            </Button>
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', backgroundColor: AppColors.themePrimaryColor }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            {text}
                        </Typography>
                        {/* <Button autoFocus color="inherit" onClick={handleClose}>
                            save
                        </Button> */}
                    </Toolbar>
                </AppBar>
                {/* <List > */}
                <div style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
                    <div style={{ width: isRowBased ? "40%" : '100%' }}>

                        {registerView(text, selDate)}
                    </div>
                </div>
                {/* </List> */}
            </Dialog>
        </div>
    );
}




