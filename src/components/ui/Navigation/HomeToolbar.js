import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import SideDrawer from './SideNav/SideDrawer'
import corporate from "assets/images/homepage/corporate.jpg";
import HeaderText from './HeaderText';


const HomeToolbar = ({ drawerToggle, closed }) => {
  // onscroll header show effect
  useEffect(()=> {
  const header = document.getElementById("myHeaderNav");
  const sticky = header.offsetTop;
  const scrollCallBack = window.addEventListener("scroll", () => {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");    
    } else {
      header.classList.remove("sticky");
    }
  });
  return () => {
    window.removeEventListener("scroll", scrollCallBack);
  };
}, []);

 const [open, setOpen] = useState(false) 
  const OpenSideBar = () =>{
      setOpen(prev=>!prev)
}
const handleClickAway = () =>{
    setOpen(false)
  }
  
  return (
    <>
      <header
        className="image-slider"
        style={{ backgroundImage: `url(${corporate})` }}
      >
        <nav className="homenav-toolbar" id="myHeaderNav">
          <Navbar menuOpen={OpenSideBar} />
        </nav>
        <HeaderText />
      </header>
      {open ? <SideDrawer handleClickAway={handleClickAway} /> : null}
    </>
  );
}

export default HomeToolbar;
