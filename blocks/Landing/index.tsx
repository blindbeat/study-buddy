import styles from "./Landing.module.css";
import educational from "@/public/landing/educational.svg";
import initiative from "@/public/landing/initiative.svg";
import forUkraine from "@/public/landing/forUkraine.svg";
import Image from "next/image";
const Landing = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <Image src={educational} alt={"educational"} />
        <Image
          src={initiative}
          alt={"initiative"}
          className={styles.secondLine}
        />
        <Image src={forUkraine} alt={"for Ukraine"} />
      </h1>
    </div>
  );
};

export default Landing;
