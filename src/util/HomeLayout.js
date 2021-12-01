import React from "react";
import Footer from "components/ui/Footer";
import Scroll from "./Scroll";

const Layout = (props) => {
  return (
    <>
     <div>
      <main>{props.children}</main>
      <Scroll />
      <Footer />
     </div>
    </>
  );
};


export default Layout;
