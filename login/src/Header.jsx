import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import './css/Header.css'
export default function Header() {
    const [open, setOpen] = useState(false);
    const [isClickedSignup, setisClickedSignup] = useState(false);
    function onClose() {
      setOpen(!open);
      setisClickedSignup(false);
    }
  return (
    <div className='header-container'>
     <div className='logo'><h1>Millio Medicine Shope</h1> </div>
     <div className='ul-login'>
            <div className='ul'>
                <ul>
                      <li>Home</li>
                      <li>Products</li>
                      <li>About</li>
                      <li>Contact</li>
                </ul>
            </div>
           
            <h3 onClick={onClose}>     
                {isClickedSignup  ? "" : ""}
                {open  ? "" : "login"}
            </h3>
     </div>
           {open && !isClickedSignup && (
            <Login
              close={onClose}
              setisClickedSignup={setisClickedSignup}
              isClickedSignup={isClickedSignup}
            />
          )}
          {isClickedSignup && (
            <SignUp
              close={onClose}
              setisClickedSignup={setisClickedSignup}
              isClickedSignup={isClickedSignup}
            />
          )}
    </div>
  )
}
