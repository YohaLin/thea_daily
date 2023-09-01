import type { AppProps } from "next/app";
import "@/styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal"

// 透過 custom hook 做到不用 CSS 處理 RWD 的問題
import useMediaQuery from "@/helpers/custom_hooks/useMediaQuery";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/infrastructure/theme";

export default function App({ Component, pageProps }: AppProps) {
  // RWD 處理點：如果寬度 >1400px，isWeb 就回傳 true
  let isWeb: boolean = useMediaQuery("(min-width: 1400px)");

  const [showModal, setShowModal] = useState<Boolean>(false)

  function toggleShowModal():void {
    setShowModal(!showModal)
  }

  // edge case：當 isWeb 改變時（切到 bp），就把 modal 關掉
  useEffect(()=>{
    setShowModal(false)
  },[isWeb])

  return (
    <ThemeProvider theme={theme}>
      <Modal isWeb={isWeb} showModal={showModal} toggleShowModal={toggleShowModal}/>
      <header>
        <Header isWeb={isWeb} showModal={showModal} toggleShowModal={toggleShowModal}/>
      </header>

      <Component {...pageProps} isWeb={isWeb} />
      <footer>
        <Footer isWeb={isWeb} />
      </footer>
    </ThemeProvider>
  );
}
