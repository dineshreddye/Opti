import React, { useState } from "react";
import { Layout, Avatar, Popover, Button } from "antd";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";
import { signOut } from "firebase/auth";

import auth from "../../firebaseAuth";

const { Header } = Layout;

function AppHeader() {
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleLogout = async () => {
    await signOut(auth);
    console.log("Logged out"); // Replace with your logout logic
  };

  const content = (
    <Button
      type="text"
      icon={<LogoutOutlined />}
      onClick={handleLogout}
      style={{ display: "flex", alignItems: "center", gap: "8px" }}
    >
      Logout
    </Button>
  );

  return (
    <Header
      style={{
        background: "white",
        padding: "0 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1,
        borderBottom: "1px solid #e8e8e8",
      }}
    >
      <div style={{ color: "white", fontSize: "20px", fontWeight: "bold" }} />
      <Popover
        content={content}
        trigger="click"
        visible={popoverVisible}
        onVisibleChange={(visible) => setPopoverVisible(visible)}
        placement="bottomRight"
      >
        <Avatar
          size="large"
          icon={<UserOutlined />}
          style={{ cursor: "pointer" }}
        />
      </Popover>
    </Header>
  );
}

export default AppHeader;
