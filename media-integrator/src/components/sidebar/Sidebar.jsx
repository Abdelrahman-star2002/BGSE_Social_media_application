import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const isProfilePage = location.pathname.startsWith("/profile");

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        {!isProfilePage && (
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="gehad.jpg" alt="" />
              <span className="sidebarFriendName">Mohamed Gehad</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="ramy.jpg" alt="" />
              <span className="sidebarFriendName">Ramy Essam</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="ra2fat.jpg" alt="" />
              <span className="sidebarFriendName">yousef Raafat</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="shawky.jpg" alt="" />
              <span className="sidebarFriendName">Omar Shawky</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="karim.jpg" alt="" />
              <span className="sidebarFriendName">Karim Mohamed</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="mehrez.jpg" alt="" />
              <span className="sidebarFriendName">Yousef mehrez</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="alaa.jpg" alt="" />
              <span className="sidebarFriendName">Alaa ammar</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="eyad.jpg" alt="" />
              <span className="sidebarFriendName">Eyad sameh</span>
            </li>
            <li className="sidebarFriend">
              <img className="sidebarFriendImg" src="sabry.jpg" alt="" />
              <span className="sidebarFriendName">Mohamed sabry</span>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
