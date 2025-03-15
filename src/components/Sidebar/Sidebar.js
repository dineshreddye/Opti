import React, { useMemo, useState } from "react";
import _values from "lodash/values";
import _head from "lodash/head";
import { Drawer, Menu, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import IconLabel from "../IconLabel";

import "./Sidebar.css"; // CSS for styling

const { Sider } = Layout;

function Sidebar({ menuItems, onMenuSelection, selectedMenuItem, subDomain }) {
  const [visible, setVisible] = useState(false);

  // Toggle Drawer visibility
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div style={{ height: "100%", overflow: "scroll", flexShrink: 0 }}>
      {/* Sidebar for Desktop/Tablet */}
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className="desktop-sidebar"
        style={{ width: "200px !important" }}
      >
        <Menu
          mode="inline"
          selectedkeys={selectedMenuItem}
          onSelect={(item) => {
            onMenuSelection(item);
          }}
          defaultSelectedKeys={selectedMenuItem}
          defaultOpenKeys={selectedMenuItem}
          items={menuItems}
        />
      </Sider>

      {/* Drawer for Mobile */}
      <MenuOutlined
        onClick={toggleDrawer}
        style={{ position: "absolute", top: "16px", left: "16px", zIndex: 1 }}
        className="menu-toggle-btn"
      />
      <Drawer
        // title="Menu"
        placement="left"
        onClose={toggleDrawer}
        visible={visible}
        className="mobile-drawer"
      >
        <Menu
          mode="inline"
          selectedkeys={selectedMenuItem}
          onSelect={(item) => {
            onMenuSelection(item);
          }}
          defaultSelectedKeys={selectedMenuItem}
          defaultOpenKeys={selectedMenuItem}
          items={menuItems}
        />
      </Drawer>
    </div>
  );
}

export default Sidebar;
