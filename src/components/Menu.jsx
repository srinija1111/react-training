import React from 'react'
import Styles from "./navbar.module.css";
const Menu = () => {
return (
<div className={Styles.menuBlock} >
<ul>
<li><a href="/">Dashboard</a></li>
<li><a href="/classroom">Classrooms</a></li>
<li><a href="/assessment">Assessments</a></li>
<li><a href="/store">Store</a></li>
<li><a href="/calender" >Calender</a></li>
<li><a href="/news">News</a></li>
<li><a href="/blog">Blog</a></li>
<li><a href="/profile">Profile</a></li>

</ul>
</div>
)
}
export default Menu
