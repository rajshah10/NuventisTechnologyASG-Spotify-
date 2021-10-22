//All imports
import React from 'react'
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import {Link} from "react-router-dom"
//CSS Imports
import "../css/SideBar.css"
import "../css/SidebarOption.css"
//SideBar Component
const SideBar = () => {
    return (
    <div className="sidebar">
        <a href ="/"><img
            className="sidebar__logo"
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        />
        </a>
        <SidebarOption Icon={HomeIcon} option="Home" />
        <SidebarOption Icon={SearchIcon} option="Search" />
        <SidebarOption Icon={LibraryMusicIcon} option="Your Library" />
        <br />
    </div>
    )
}

export default SideBar
