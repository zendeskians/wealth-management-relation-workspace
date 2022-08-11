import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import PortfolioPerformance from "../../../components/PortfolioPerformance";
import SidebarClient from "../../../components/Sidebar";
import PieChart from "../../../components/PieChart";
import Sidebar from "../../../components/ChatSideBar";
const { Header, Sider, Content } = Layout;

const Chat = () => {
  return (
    <Layout>
      <SidebarClient selected="2" />
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background h-screen flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          <Sidebar />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Chat;
