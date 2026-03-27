import React from 'react'
import './index.css'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <>
        <div className='footerBar'>
            <div>
                <p className='footerCopy'>Copyright {year} SONIC NEON AUDIO NARRATIVE</p>
            </div>

            <div className='footerLinks'>
                <p>API DOCUMENTATION</p>
                <p>GITHUB</p>
                <p>SUPPORT</p>
            </div>
        </div>
        </>
    )
}

export default Footer