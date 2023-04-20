import Head from "next/head";
import { JetBrains_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/blocks/Header";
import Landing from "@/blocks/Landing";
import classNames from "classnames";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Study&Buddy</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={classNames(styles.main, jetBrainsMono.className)}>
        <Header />
        <Landing />
      </main>
    </>
  );
}
