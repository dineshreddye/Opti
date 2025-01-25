import React, { useState } from "react";

import { Drawer, Menu, Layout } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import IconLabel from "../IconLabel";

import "./Sidebar.css"; // CSS for styling

const { Sider } = Layout;

function Sidebar({ menuItems, onMenuSelection, selectedMenuItem }) {
  const [visible, setVisible] = useState(false);

  // Toggle Drawer visibility
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="responsive-sidebar">
      {/* Sidebar for Desktop/Tablet */}
      <Sider breakpoint="lg" collapsedWidth="0" className="desktop-sidebar">
        <Menu
          mode="inline"
          selectedkeys={selectedMenuItem}
          onSelect={(item) => {
            onMenuSelection(item.key);
          }}
          defaultSelectedKeys={["1"]}
        >
          {menuItems.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <IconLabel icon={item.icon} label={item.label} />
              </Menu.Item>
            );
          })}
        </Menu>
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
            onMenuSelection(item.key);
          }}
          defaultSelectedKeys={["1"]}
        >
          {menuItems.map((item) => {
            return (
              <Menu.Item key={item.key}>
                <IconLabel icon={item.icon} label={item.label} />
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
    </div>
  );
}

export default Sidebar;
