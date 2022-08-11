import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import SidebarManager from "../../components/SidebarManager";
import Kanban from "../../components/Manager/Kanban";
import PieChart from "../../components/PieChart";
const { Header, Sider, Content } = Layout;

const Planner = () => {
  return (
    <Layout>
      <SidebarManager selected = "4"/>
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background h-screen flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          <h1 class="text-2xl">Planner</h1>
          <div style={{ padding: '50px'}}>
            <h1 style={{ marginBottom: '20px'}}>
              
            </h1>
            <Kanban />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Planner;
