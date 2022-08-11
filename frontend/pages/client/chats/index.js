import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import PortfolioPerformance from "../../../components/PortfolioPerformance";
import Sidebar from "../../../components/Sidebar";
import PieChart from "../../../components/PieChart";
const { Header, Sider, Content } = Layout;

const Chat = () => {
  return (
    <Layout>
      <Sidebar selected="2" />
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background h-screen flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          CHAT FILLER
        </Content>
      </Layout>
    </Layout>
  );
};

export default Chat;
