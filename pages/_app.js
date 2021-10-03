import "../styles/App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import Header from "../components/Header";
import { AuthContextProvider } from "../contexts/AuthContext";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import 'react-virtualized/styles.css';
import '../styles/SearchTable.css'
import "antd/dist/antd.css";
const queryClient = new QueryClient();

function MyApp({ Component, pageProps, navigation }) {
  //console.log(navigation);
  useEffect(() => {
    document.title = "台大課程小工具 | UT's blog";
  }, []);
  return (
    <>
      <AuthContextProvider navigation={navigation}>
        <Header />
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
