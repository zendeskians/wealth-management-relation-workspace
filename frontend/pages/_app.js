import "../styles/globals.css";
import Script from "next/script";
import "./register.css";
import { ChakraProvider } from "@chakra-ui/react";
import ChatSideBar from "../components/ChatSideBar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
