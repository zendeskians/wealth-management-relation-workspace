import { Flex, Heading } from "@chakra-ui/layout";
import ChatSidebar from "../../../components/ChatSideBar";
import { Avatar } from "@chakra-ui/avatar";
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
import { Button, Text, Input } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <Flex bg="gray.100" h="81px" w="100%" align="center" p={5}>
      <Avatar src="" marginEnd={3} />
      <Heading size="lg">user@gmail.com</Heading>
    </Flex>
  );
};

const BottomBar = () => {
  return (
    <Flex p={3}>
      <Input placeholder="Type a message..." />
      <Button type="submit" hidden autoComplete="off">
        Submit
      </Button>
    </Flex>
  );
};

export default function Chat() {
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
          <Flex h="100vh">
            <ChatSidebar />
            <Flex flex={1} direction="column">
              <TopBar />
              <Flex
                flex={1}
                direction="column"
                pt={4}
                mx={5}
                overflowX="scroll"
              >
                <Flex
                  bg="blue.100"
                  w="fit-content"
                  minWidth="100px"
                  borderRadius="lg"
                  p={3}
                  m={1}
                >
                  <Text>this is a dummy message</Text>
                </Flex>
                <Flex
                  bg="blue.100"
                  w="fit-content"
                  minWidth="100px"
                  borderRadius="lg"
                  p={3}
                  m={1}
                >
                  <Text>this is a dummy message</Text>
                </Flex>
                <Flex
                  bg="green.100"
                  w="fit-content"
                  minWidth="100px"
                  borderRadius="lg"
                  p={3}
                  m={1}
                  alignSelf="flex-end"
                >
                  <Text>this is a dummy message</Text>
                </Flex>
              </Flex>
              <BottomBar />
            </Flex>
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
}
