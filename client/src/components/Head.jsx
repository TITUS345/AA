import React from "react";
import { Link } from "react-router-dom";



export default function Head() {
  return (
    <div className='bg-slate-500'>
        <div className='flex justify-between items-center max-w-6xl
        max-auto p-3'>
          <Link to='/'>
          <h className=" font-bold"> AA App</h>
          </Link> 
            
          
               <ul className=' flex gap-4'>
                <Link to='/'>
                <li>Home</li>
                </Link>
                <Link to='/about'>
                <li>About</li>
                </Link>
                <Link to='/log-in'>
                <li>LogIn</li>
                </Link>
            </ul>
        </div>
    </div>
  )
}
