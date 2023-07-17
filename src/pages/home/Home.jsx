import React from "react"
import Drawer from "../../components/drawer/drawer"
import Feed from "../../components/feed/Feed"
import HomeTop from "../../components/homeTop/HomeTop"
import RightBar from "../../components/rightbar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"
export default function Home() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

    // const handleClose = () => {
    //     setOpen(false);
    // };
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <HomeTop />
        {/* {Drawer(false)} */}
        {/* <SideBar />
        <Feed />
        <RightBar /> */}

      </div>
    </>
  )
}
