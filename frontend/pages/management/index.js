import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import SidebarManager from "../../components/SidebarManager";
import BreadcrumbBar from "../../components/Manager/BreadcrumbBar";
import PieChart from "../../components/PieChart";
import { data } from "../../constants/ClientPortfolioPerformance";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [clientIdToView, setClientIdToView] = useState(0);

  return (
    <Layout>
      <SidebarManager selected="1" />
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background h-screen flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          <div className="flex justify-center font-bold text-lg">
            Your Clients
          </div>
          <BreadcrumbBar currentPath={"1"}/>
          <PortfolioPerformance data={data[clientIdToView]}/>
          <div className="w-full justify-center flex mt-10">
            <div className="w-1/3 self-center">
              <PieChart />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
