
import 'antd/dist/antd.css';
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import PortfolioPerformance from '../components/PortfolioPerformance';
import Sidebar from '../components/Sidebar';
const { Header, Sider, Content } = Layout;




const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sidebar/>
      <Layout className="site-layout">
        <Content
          className="site-layout-background h-screen"
          style={{
            margin: '24px 16px',
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          <PortfolioPerformance/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;