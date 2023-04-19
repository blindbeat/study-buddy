import styles from "./Header.module.css";
import Image from "next/image";
import logo from "public/logo.svg";
const Header = () => {
  return (
    <header className={styles.header}>
      <Image src={logo} className={styles.logo} alt={"logo"} />
    </header>
  );
};

export default Header;
