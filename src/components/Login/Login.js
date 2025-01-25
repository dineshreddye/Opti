import React, { useContext, useState } from "react";
import { Form, Input, Button, message } from "antd";

import AuthContext from "../../contexts/AuthContext";

function Login() {
  const { loginUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);

    try {
      loginUser(email, password);
      message.success("Login successful!");
    } catch (error) {
      message.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          background: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <Form name="login" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input type="email" placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Login;
