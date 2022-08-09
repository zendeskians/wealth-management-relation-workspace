
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

export const getStaticPaths = async () => {

    const Ids = ["1","2","3"]

    const paths = Ids.map(id => {
        return {
            params: {id: id}
        }
    })

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {

    const id = context.params.id
    return {
        props: {id : id}
    }
}

const ClientPortfolio = (props) => {

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
          <BreadcrumbBar currentPath={props.id}/>
          <PortfolioPerformance data={data[parseInt(props.id-1)]}/>
          <div className="w-full justify-center flex mt-10">
            <div className="w-1/3 self-center">
              <PieChart />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default ClientPortfolio