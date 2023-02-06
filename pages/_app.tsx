import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
      <Component {...pageProps} />
      <Head>
        <title>MovieDatabase</title>
      </Head>
      <Footer />
    </>
  );
}
