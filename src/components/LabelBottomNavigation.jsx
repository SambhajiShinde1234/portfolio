import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';


import { AiOutlineHome } from 'react-icons/ai'
import {MdOutlineContactPhone } from 'react-icons/md'
import { MdOutlineSchool } from 'react-icons/md'

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Recents"
        value="recents"
        icon={< AiOutlineHome />
      }
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<MdOutlineContactPhone />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<MdOutlineSchool />}
      />
      {/* <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} /> */}
    </BottomNavigation>
  );
}