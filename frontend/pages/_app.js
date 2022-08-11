import "../styles/globals.css";
import Script from "next/script";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import ChatSideBar from "../components/ChatSideBar";
import '../styles/globals.css'
import './register/register.css'
import '../components/Manager/Kanban.scss'
import '../components/Manager/Card.scss'
import '../components/Manager/Breadcrumb.css'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
