import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PlayCircleFilled
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import { useRouter } from "next/router";
import PortfolioPerformance from "../components/PortfolioPerformance";
import Sidebar from "../components/Sidebar";
import PieChart from "../components/PieChart";
import { lineGraphData, pieChartData } from "../constants/PortfolioPerformanceClientData"
import Image from 'next/image'
const { Header, Sider, Content } = Layout;

const App = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div class="w-screen h-screen bg-white">
      <div className="flex justify-around h-full my-auto items-center mt-12">
        <div className="w-1/2 text-center">
        <Image src="/Citibank-Logo.png" width="450px" height="254px" layout="responsive" />
        </div>
        <div class="w-1 h-4/6 bg-black my-auto"></div>
        <div className="w-1/2 ml-5 text-center">
          <p class="font-bold text-lg">Dive into our number one wealth management platform <a href="/login" class="underline">CitiWealth</a> and receive top service from our professionals
          </p>
          <p class="font-bold text-3xl" style={{cursor: 'pointer'}}><PlayCircleFilled onClick={()=>router.push("/login")}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
