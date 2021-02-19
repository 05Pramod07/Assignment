import React from 'react'
import './Header.css'
const header=(props)=>{
    return(
        <div className='Header'>
            <h2 className='HeaderTitle'>{props.title}</h2>
        </div>
    )
}
export default header;