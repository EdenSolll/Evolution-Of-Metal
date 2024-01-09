import React from 'react'
import { Navbar } from 'reactstrap'
import AudioPlayer from './AudioPlayer'

const NavBar: React.FC = () => {
    console.log('NavBar rendered')
    return (
        <Navbar
            color="light"
            light
            expand="md"
            style={{
                position: 'fixed',
                bottom: 0,
                width: '100%',
                backgroundColor: '#242424',
            }}
        >
            <AudioPlayer />
        </Navbar>
    )
}

export default NavBar
