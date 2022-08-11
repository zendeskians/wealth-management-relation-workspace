import "antd/dist/antd.css";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React, { useState, useEffect } from "react";
import PortfolioPerformance from "../../components/PortfolioPerformance";
import Sidebar from "../../components/SidebarManager";
import PieChart from "../../components/PieChart";
import {FilePreviewerThumbnail} from "react-file-previewer";
import { Document, Page } from "react-pdf";
const { Header, Sider, Content } = Layout;
import axios from 'axios'
import Image from "next/image";

const Documents = () => {

  const [unSignedFiles, setUnsignedFiles] = useState([]);
  const [signedFiles, setSignedFiles] = useState([])

  async function getDocuments(){
    await axios.get("http://34.168.32.14:8081/api/v1/document/client", {headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem("ACCESS_TOKEN")
        }})
        .then(res => {
          const datas = res.data
          console.log(datas)
          for (var document of datas){
            if (document.signed === true){
              setSignedFiles(signedFiles => [...signedFiles, document])
            } else {
              setUnsignedFiles(unSignedFiles => [...unSignedFiles, document])
            }
          }
        })
        .catch(err => {
            console.log(err)
      
      });
  }

  useEffect(()=>{
    
    getDocuments();
  }, [])

  return (
    <Layout>
      <Sidebar selected = "3"/>
      <Layout className="site-layout  ">
        <Content
          className="site-layout-background flex-col items-center w-full"
          style={{
            margin: "24px 16px",
            padding: 24,
          }}
        >
          {/* This is where the main stuff of the page should go */}
          <div className="font-bold self-start text-2xl mb-12">
              Documents
          </div>
          <div className="flex justify-around h-full">
            <div className="w-1/2 h-full text-center">
              <h1 className="font-bold text-xl mb-12">Unsigned</h1>
              <div class="flex flex-col p-3">
                  {unSignedFiles.map(file => (
                    <div class="flex items-center justify-evenly mb-12">
                      
                      <Image class="w-full mx-auto" width="100%" height="100%" src={`/${file.document_name}.jpeg`} />
                      <div class="mr-4 pr-4">
                          <div class="text-lg">{file.document_name}</div>
                          <div class="text-lg">{file.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div class="h-full w-1 bg-black my-auto">
            
            </div>
            <div className="w-1/2 text-center">
              <h1 className="font-bold text-xl mb-12">Signed</h1>
              <div class="flex flex-col">
                  {signedFiles.map(file => (
                    <div class="flex items-center justify-evenly mb-12">
                    <Image class="w-full mx-auto" width="100%" height="100%" src={`/${file.document_name}.jpeg`} />
                      <div class="mr-4 pr-4">
                          <div class="text-lg">{file.document_name}</div>
                          <div class="text-lg">{file.description}</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Documents;
