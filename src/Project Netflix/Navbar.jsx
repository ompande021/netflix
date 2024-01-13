import { Link } from 'react-router-dom'

import { useState } from 'react'
import './Navbar.css'
const Navbar=()=>{

    const [status,setStatus]=useState(false)

    window.addEventListener('scroll',()=>{
        if(window.pageYOffset > 100){
           setStatus(true)
        }else{
           setStatus(false)
        }
    })

    
    return(
       <div className='navbar' style={status ? {backgroundColor:'black'}:{backgroundColor:'transparent'}}>
        <nav className='nav'>
            <div className='navbox1'>
                <Link to={'/'}>
                <img src="https://pngshare.com/wp-content/uploads/2021/06/Netflix-Logo-Transparent-PNG-4-1024x317.png" alt="" />
                </Link>
                <ul type='none'>
                    <li>Start</li>
                    <li>Series</li>
                    <li>Films</li>
                    <li>Propular news</li>
                    <li> My list</li>
                    <li>Explore by languages</li>
                </ul>
            </div>
            <div className='navbox2'>
                <div>
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <i class="fa-regular fa-bell"></i>
                <Link to={'/login'} style={{color:'white'}}><i class="fa-regular fa-user"><span style={{border:'none',color:'white'}}>▽</span></i></Link>
            </div>
        </nav>
       </div>
    )
}
export default Navbar