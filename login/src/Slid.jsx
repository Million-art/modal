import React from 'react'

export default function slid() {
   const  img=require('./oil.jpg')
    return (
    <div>
<img src={img} alt='ass' style={{height:300,width:1000,overflow:'hidden',position:'absolute',top:150}}/>

    </div>
  )
}
