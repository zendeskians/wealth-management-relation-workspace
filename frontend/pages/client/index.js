import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import Sidebar from "../../components/Sidebar";
import PieChart from "../../components/PieChart";
import {
  barChartData,
  pieChartData,
} from "../../constants/PortfolioPerformanceClientData";
import Bar from "../../components/BarChart";
import BarChart from "../../components/BarChart";
import { IndividualTx } from "../../components/Client/IndividualTx";
import axios from 'axios'
const { Header, Sider, Content } = Layout;

const App = () => {
  const [dataForLine, setDataForLine] = useState();
  var lineGraphData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "Sept",
    ],
    datasets: [
      {
        label: "Primary Portfolio",
        data: [1, 2.234, 1.324, 4.123, 2.332, 4.234, 5.234234, 5.123, 7],
        borderColor: "#3B82F6",
      },
      {
        label: "Market Portfolio",
        data: [1, 2.2, 1.3, 4, 1.8, 3, 4, 5, 5],
        borderColor: "#BB82F6",
      },
    ],
  };
  async function getPortfolio(){
    await axios.get("http://34.168.32.14:8081/api/v1/portfolio/client/percentage_change_by_month", {headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem("ACCESS_TOKEN")
        }})
        .then(res => {
          const datas = res.data
          const monthMapping = {
            "January": 0,
            "February": 1,
            "March": 2,
            "April": 3,
            "May": 4,
            "June": 5,
            "July": 6
          };
          for (var data in datas){
            console.log(data)
            lineGraphData.datasets[0].data[monthMapping[data]] = datas[data]
          }
          console.log(lineGraphData)
          setDataForLine(lineGraphData)
          console.log(dataForLine);
          
        })
        .catch(err => {
            console.log(err)
      
      });
  }
  
  useEffect(()=>{
    // getPortfolio();
  }, [])

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
