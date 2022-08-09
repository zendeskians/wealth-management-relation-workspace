import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";

const { Sider } = Layout;
export default function Sidebar(props){
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div className="flex text-white justify-center w-full h-32 items-center">
        <div>
            {/* TODO: Eventually abstract this out to props */}
          <div>
            Sierra Ferguson
            <div className="text-xs text-gray-500">s.gerguson@gmail.com</div>
          </div>
        </div>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",
            icon: <UserOutlined />,
            label: "Home",
          },
          {
            key: "2",
            icon: <VideoCameraOutlined />,
            label: "Chat",
          },
          {
            key: "3",
            icon: <UploadOutlined />,
            label: "Recommender",
          },
          {
            key: "4",
            icon: <UploadOutlined />,
            label: "Documents",
          },
        ]}
      />
    </Sider>
  );
};
