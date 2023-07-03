import "./sidebar.css"
import { RssFeed, Chat, PlayCircleFilledOutlined, Bookmark, Group, HelpOutline, WorkOutline, Event, School } from "@mui/icons-material"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarWrapper">
                <ul className="sideBarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayCircleFilledOutlined className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sideBarItemListImg" />
                        <span className="sideBarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sideBarBtn">Show More</button>
                <hr className="sideBarHr"/>
                <ul className="sideBarFriendList">
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                    <li className="sideBarFriend">
                        <img src="./assets/person/2.jpeg" alt="" className="sideBarFriendImg" />
                        <span className="sideBarfriendName">Jan Doe</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
