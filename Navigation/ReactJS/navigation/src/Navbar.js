import React, { useState } from 'react'

export default function Navbar() {
    const [navStatus, setnavStatus] = useState(0)
    const [divWidth, setdivWidth] = useState('0px')

    function openNav() {
        if (navStatus === 0) {
            setdivWidth('100%')
            setnavStatus(1)
        } else {
            setdivWidth('0px')
            setnavStatus(0)

        }

    }

    return (
        <div>

            <div className='mainDiv' style={{ width: divWidth }}>
                <button onClick={openNav}><i class="fas fa-bars"></i></button>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact us</li>
                    <li>About</li>
                </ul>

            </div>
        </div>
    )

}