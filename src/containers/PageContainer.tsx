import React, { useEffect } from 'react';
import { Navbar } from 'reactstrap';
import AudioPlayer from './AudioPlayer';

const NavBar: React.FC = () => {
  useEffect(() => {
    console.log('NavBar mounted');
  }, []);

  return (
    <div style={{ width: '100%', height: 60, backgroundColor: '#242424' }}>
      <Navbar color="light" light expand="md">
        <AudioPlayer />
      </Navbar>
    </div>
  );
}

export default NavBar;
