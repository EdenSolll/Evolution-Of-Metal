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
                zIndex: 9999,
                width: '100%',
                overflow: 'visible',
                backgroundColor: '#242424',
            }}
        >
            <AudioPlayer />
        </Navbar>
    )
}

export default NavBar