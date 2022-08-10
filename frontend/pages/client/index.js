import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import Sidebar from "../../components/Sidebar";
import PieChart from "../../components/PieChart";
import {
  barChartData,
  lineGraphData,
  pieChartData,
} from "../../constants/PortfolioPerformanceClientData";
import Bar from "../../components/BarChart";
import BarChart from "../../components/BarChart";
import { IndividualTx } from "../../components/Client/IndividualTx";
const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sidebar selected="1" />
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background  flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          <div className="flex justify-center font-bold text-lg">
            Your Portfolio at a glance
          </div>
          <div
            className="w-full rounded-lg p-5 flex-col items-center flex"
            style={{ height: "50vh" }}
          >
            <PortfolioPerformance data={lineGraphData} />
          </div>
          <div className="w-full justify-center flex mt-10 flex flex-row justify-between">
            <div className="w-1/3 rounded-lg p-5 flex-col items-center flex">
              <div className="font-bold text-lg ">Portfolio Composition</div>
              <PieChart data={pieChartData} />
            </div>
            <div className="w-1/2 rounded-lg p-5 flex-col flex  items-center ">
              <div className="font-bold self-start text-lg">
                Your Daily Returns
              </div>
              <div className=" self-start ">12 August 2022</div>
              <div className="h-full flex-col flex items-center w-full">
                <BarChart data={barChartData} />
              </div>
            </div>
          </div>

          <div className="w-full justify-center flex mt-10 flex flex-row justify-between ">
            <div className="w-2/5 flex-col flex rounded-lg bg-blue-100">
              <div className="font-bold text-xl mb-3 w-full p-5">
                Recent Transactions
              </div>
              <div className=" overflow-auto p-5" style={{ height: "50vh" }}>
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
                <IndividualTx
                  stockName="Tesla"
                  date="10 August"
                  txAmount="$15,000"
                  sharePrice="$1000"
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
