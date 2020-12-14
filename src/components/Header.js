import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='header__users'>
                <h2>Users</h2>
            </div>
            <div className='header__selectedUsers'>
                <h2>Selected users</h2>
            </div>
        </div>  
    )
}

export default Header
