import React from 'react'
import './css/Header.css'

export default function Login(props) {
  return (
    <div className='login'>
        <form>
            <input type="text" />
            <br></br>
            <button >submit</button>
            <br></br>
            <label
            onClick={() => [
              props.close,
              props.setisClickedSignup
              (!props.isClickedSignup),
            ]}
            style={{ cursor: "pointer", backgroundColor: "red" }}
          >
            <small>Create an account </small>
          </label>        </form>
    </div>
  )
}
