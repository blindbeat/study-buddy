import Image from "next/image";
import logo from "@/public/logo.svg";
import outerStyles from "@/blocks/Header/Header.module.css";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <Image src={logo} className={styles.logo} alt={"logo"} />
        <a href={"studybuddyua.vercel.app"}>studybuddyua.vercel.app</a>
      </div>
      <div>
        <h5>Initiative</h5>
        <p>
          We are introducing a new after-school activity - common projects
          developed together by groups of students and teachers - to help break
          the communication and relationship barriers between them.
        </p>
      </div>
      <div>
        <h5>Contacts</h5>
        <p>New Space Foundation</p>
        <p>Ul. Wspólna 54A/8</p>
        <p>00-684 Warszawa</p>
      </div>
    </footer>
  );
};

export default Footer;
