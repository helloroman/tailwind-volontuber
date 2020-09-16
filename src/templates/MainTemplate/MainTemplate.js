import React from 'react';
import Helmet from 'react-helmet';

const MainTemplate = ({ children }) => {
  return (
    <div>
      <Helmet lang="en" title="Hello Roman" />
      {children}
    </div>
  );
};

export default MainTemplate;
