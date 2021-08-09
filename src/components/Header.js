import React from 'react'
import { Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <div>
             <Navbar bg="primary" variant="light" style={{color:'white',fontSize:'medium'}}>
                Today Task Tracker
            </Navbar>
        </div>
    )
}

export default Header
