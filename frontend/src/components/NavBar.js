import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return ( 
        <div>
            <NavLink to='/pokemon/new' style={{paddingRight: '10px'}}>Add New Pokemon </NavLink>
            <NavLink to='/pokemon/user_pokemon' style={{paddingRight: '10px'}}>Current Team </NavLink>
        </div>
    )

}

export default NavBar