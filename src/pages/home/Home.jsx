import Feed from "../../components/feed/Feed"
import HomeTop from "../../components/homeTop/HomeTop"
import RightBar from "../../components/rightbar/RightBar"
import SideBar from "../../components/sidebar/SideBar"
import Topbar from "../../components/topbar/Topbar"
import "./home.css"
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <HomeTop />
        <SideBar />
        <Feed />
        <RightBar />

      </div>
    </>
  )
}
