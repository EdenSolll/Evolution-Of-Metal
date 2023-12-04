import React from 'react';
import { Navbar } from 'reactstrap';
import AudioPlayer from './AudioPlayer';

const NavBar: React.FC = () => {
  console.log('NavBar rendered');
  return (
    <div style={{ width: '100%', height: 60, backgroundColor: '#242424' }}>
      <Navbar color="light" light expand="md">
        <AudioPlayer />
      </Navbar>
    </div>
  );
}

export default NavBar;
