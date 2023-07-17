import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker"
import { Card } from "@mui/material";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { AppColors } from '../themes/color';
import { useMediaQuery } from '../hooks/useMediaQuery';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function DateTimePopup(text, selDate) {
    const isRowBased = useMediaQuery('(min-width: 700px)');
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const date = (text, selDate) => {
        return (
            <Card variant={isRowBased ? "outlined" : ''} className="card" elevation={0}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <StaticDateTimePicker

                        label="Controlled picker"
                        orientation="portrait"
                        defaultValue={dayjs(Date())}
                        onAccept={(val) =>
                            selDate(val.$d)
                        }
                        onClose={handleClose}

                    />
                    {/* <StaticDatePicker className="calender" orientation="portrait" defaultValue={dayjs('2022-04-17')} /> */}
                </LocalizationProvider>
                {/* {TimeSlider()} */}
            </Card>

        )
    }

    return (
        <div>
            <Button variant="text" onClick={handleClickOpen} style={{ color: 'black' }}>
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
                    <div style={{ width: '100%' , height: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
                    <div style={{ width: isRowBased ? '40%' : '100%', }}>

                            {date(text, selDate)}
                        </div>
                    </div>
                {/* </List> */}
            </Dialog>
        </div>
    );
}




