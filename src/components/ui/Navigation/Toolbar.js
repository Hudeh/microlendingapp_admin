import React, {useState, useEffect} from 'react'
import Navbar from './Navbar'
import SideDrawer from './SideNav/SideDrawer'

const Toolbar = ({ drawerToggle, closed }) => {
 
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
        <header>
        <nav className='nav-toolbar' id="myHeaderNav">
        <Navbar menuOpen={OpenSideBar} />
        </nav>
        </header>
        {open ? <SideDrawer handleClickAway={handleClickAway} /> : null}
      </>
    );
}

export default Toolbar;
