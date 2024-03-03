import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

function NavbarComponent() {
  const location = useLocation();
  const [darkTheme, setDarkTheme] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [userName,setUsername]=useState("");
  React.useEffect(()=>{
    try{
      if(JSON.parse(localStorage.getItem("user")))
      {
       setUsername(JSON.parse(localStorage.getItem("user").name))
      }
     }
     catch(error){
       console.log(error.message)
     }
  },[])
  

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleThemeToggle = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (!darkModeStatus) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      setDarkTheme(false);
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      setDarkTheme(true);
    }
  };

  return (
    <>
      <Navbar className='bg-gray-800'>
        <Container className="flex justify-between items-center px-2 py-2">
          <Navbar.Brand href="/home" className='text-white flex items-center text-xl'>
            <img 
              src="https://i.pinimg.com/originals/f4/fa/ec/f4faec1798f199132d27ed903701818b.png"
              className="d-inline-block align-top mr-2 h-10 w-10 rounded-3xl"
              alt="PgDekho Logo"
            />
            PgDekho.com
          </Navbar.Brand>
          {location.pathname === '/home' && (
            <Nav className="flex items-center mx-28">
              <input type="text" placeholder="Search..." className="form-control rounded-lg w-96" />
            </Nav>
          )}
          {location.pathname === '/home' && (
            <Nav className="items-center flex ml-auto">
              <label className="radio-container mr-4 text-white">
                <input type="checkbox" checked={darkTheme} onChange={handleThemeToggle} />
                <span className="radio-checkmark">Toggle</span>
              </label>
              <div className="relative">
                <h1>
                  <span className="cursor-pointer text-white flex" onClick={handleDropdown}>
                    {userName} ↓
                  </span>
                </h1>
                {isOpen && (
                  <div className="absolute top-16 right-4 bg-white shadow-md rounded w-36 py-2 z-10">
                    <Link to="/myaccount" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                      My Account
                    </Link>
                    <Link to="/">
                      <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100 focus:outline-none">
                        Logout
                      </button>
                    </Link>
                  </div>
                )}
              </div>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent;
