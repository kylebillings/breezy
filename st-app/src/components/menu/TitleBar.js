import React from 'react';

import color from '../global/colors.js';
import logo from '../../images/logo.svg';

const styles = {
  backgroundColor: color.white,
  height: '48',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '1.5rem'
};

const TitleBar = () => {
  const reload = () => {
    window.location.reload(true);
  };

  return (
    <div style={styles}>
      <img src={logo} alt="Logo" onClick={reload} />
    </div>
  );
};

export default TitleBar;
