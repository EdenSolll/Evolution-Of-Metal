import React from 'react';
import {Navbar} from 'reactstrap';
import AudioPlayer from './AudioPlayer';

const NavBar: React.FC = () => {
  return (
    <div>
      <Navbar color='pink' dark expand='lg' fixed='top'>
        <AudioPlayer/>
      </Navbar>
    </div>
  );
}

export default NavBar;
