// import React from 'react'
import { Button, List, ListItem, ListItemText, Drawer, Divider } from '@mui/material';

import { Inbox } from "@mui/icons-material"
import clsx from 'clsx';

import React, { Component } from "react";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import withStyles from "@emotion/styled";
// import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

const styles = {
    fullList: {
        width: 300
    }
};

export default function MyDrawer(open, slide) {
    const anchor = 'left'
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
console.log('kjhgjh')
        setState({ ...state, [anchor]: open });
    };
    const [close, setClose] = React.useState();

    const handleClickOpen = () => {
        // setOpen(true);
        open = true
    };

    const handleClose = () => {
        // setOpen(false);
        open = false
        setClose(false)
        console.log('close clicked', open)
    };
    // const showDrawer = event => {
    //     if (
    //         event &&
    //         event.type === "keydown" &&
    //         (event.key === "Tab" || event.key === "Shift")
    //     ) {
    //         return;
    //     }

    //     setOpenSideBar(true);
    // };

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log("Sidebar state: " + this.state.openSidebar);
    // }


    const fullList = () => {

        return (
            <div
                // className={classes.fullList}
                role="presentation"
                // onClick={()=> slide('on')}
            // onKeyDown={onClose}
            >
                <List>
                    {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
                        <ListItem button key={text}>
                            <Inbox>
                                {index % 2 === 0 ? <Inbox /> : <Inbox />}
                            </Inbox>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {["All mail", "Trash", "Spam"].map((text, index) => (
                        <ListItem button key={text}>
                            <Inbox>
                                {index % 2 === 0 ? <Inbox /> : <Inbox />}
                            </Inbox>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </div>
        );
    };


    return (
        <Drawer
            open={anchor}
            onOpen={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
        // disableBackdropTransition={!iOS}
        // disableDiscovery={iOS}
        >
            {/* {console.log(open)} */}
            {fullList()}
        </Drawer>
    );

}

