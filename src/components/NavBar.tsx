import React from 'react';
import { Navbar } from 'reactstrap';
import AudioPlayer from './AudioPlayer';

const NavBar: React.FC = () => {
  return (
    <div style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000, backgroundColor: '#242424' }}>
      <Navbar color="light" light expand="md">
        <AudioPlayer />
      </Navbar>
    </div>
  );
}

export default NavBar;
