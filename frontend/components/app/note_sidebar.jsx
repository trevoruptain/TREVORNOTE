import React from 'react';
import SidebarHeaderContainer from './sidebar_header_container';

class NoteSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sidebar-container">
        <SidebarHeaderContainer type="notes" />
      </div>
    );
  }
}

export default NoteSidebar;
