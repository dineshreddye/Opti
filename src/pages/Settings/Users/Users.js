import React, { useContext, useEffect, useState } from "react";
import _sortBy from "lodash/sortBy";
import _values from "lodash/values";
import _reverse from "lodash/reverse";
import { Table, Button, Modal, Form, Input, Space } from "antd";
import { equalTo, onValue, orderByChild, query, ref } from "firebase/database";
import AuthContext from "../../../contexts/AuthContext";
import { database } from "../../../configs/firebaseConfig";

function Users({ subDomain }) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  const { createNewUser } = useContext(AuthContext);

  // TODO here.
  // Fetch users when component loads

  useEffect(() => {
    const userRef = query(
      ref(database, "users"),
      orderByChild("party"),
      equalTo(subDomain),
    );
    const unsubscribe = onValue(userRef, (snapshot) => {
      const campaignsResponse = snapshot.val();
      setUsers(_reverse(_sortBy(_values(campaignsResponse), "createdAt")));
    });
    return unsubscribe;
  }, []);

  // const handleEdit = (record) => {
  //   setEditingUser(record);
  //   form.setFieldsValue({ ...record, password: "" });
  //   setIsModalVisible(true);
  // };

  const handleAdd = () => {
    setEditingUser(null);
    form.validateFields().then(() => {
      // TODO here.
      // save user. the values will be present in .then callback parameters
    });
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleModalSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        // if (editingUser) {
        //   setUsers((prevUsers) =>
        //     prevUsers.map((user) =>
        //       user.key === editingUser.key ? { ...user, ...values } : user,
        //     ),
        //   );
        // } else {
        //   const newUser = { ...values, key: Date.now() };
        //   setUsers((prevUsers) => [...prevUsers, newUser]);
        // }
        createNewUser({ ...values, party: subDomain });
        setIsModalVisible(false);
      })
      .catch((info) => {
        // console.log("Validate Failed:", info);
      });
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Button type="link" onClick={() => handleEdit(record)}>
    //       Edit
    //     </Button>
    //   ),
    // },
  ];

  return (
    <div>
      <Space
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 16,
        }}
      >
        <Button type="primary" onClick={handleAdd}>
          Add User
        </Button>
      </Space>
      <Table columns={columns} dataSource={users} pagination={false} />

      <Modal
        title={editingUser ? "Edit User" : "Add User"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onOk={handleModalSubmit}
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={{ name: "", email: "", password: "" }}
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input the name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input type="email" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input the password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default Users;
