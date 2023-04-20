import Head from "next/head";
import { Poppins } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/blocks/Header";
import Landing from "@/blocks/Landing";
import classNames from "classnames";
import Explanation from "@/blocks/Explanation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Study&Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={classNames(styles.main, poppins.className)}>
        <Header />
        <Landing />
        <Explanation />
      </main>
    </>
  );
}
