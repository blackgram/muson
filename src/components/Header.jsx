import React, {useState, useEffect} from 'react'
import Navbar from './navbar'
import NavDropdown from './NavDropdown';

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
    {isSmallScreen ? <NavDropdown /> : <Navbar />}
    </>
  )
}

export default Header