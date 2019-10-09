import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar capitalize">
                <ul>
                    <li><NavLink to="/login">login</NavLink></li>
                    <li><NavLink to="/register">signup</NavLink></li>
                </ul>
            </nav>
        )
    }
}

