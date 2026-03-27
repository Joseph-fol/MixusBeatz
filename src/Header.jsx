import React from 'react'
import './index.css'

const Header = () => {
  return (
    <>
      <div className='header'>
        <h1>Your Sound, <br /> Unfiltered </h1>
        <div className='d-flex justify-content-center'>
          <div className='search d-flex justify-content-center align-items-center mt-4 gap-2'>
             <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24"><path fill="#fff" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"/></svg>

            <input type="text" className='p-2 w-100' placeholder='Search songs, artists, or albums' />
            <button className='btn py-2' style={{ backgroundColor: "#c3f5ff", borderRadius: "20px", color: "#0f0c2c" }}>Explore</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Header