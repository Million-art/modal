import React from 'react'
import './css/Header.css'

export default function SignUp(props) {
  return (
    <div className='signup'>
        <form>
        <input type="text" /><br></br>
        <button >submit</button><br></br>
        <small>alredy have an account</small><br></br>
        <button onClick={props.close}>close</button>
        </form>
    </div>
  )
}
