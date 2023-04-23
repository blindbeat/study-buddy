import styles from "./Landing.module.css";
import landingImage from "assets/images/landingImage.jpg";
import Image from "next/image";
import Button from "@/components/Button";
const Landing = () => {
  const clickHandler = () => {
    const elem = document.getElementById("explanation");
    if (elem === null) return;
    elem.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        educational
        <div className={styles.secondLine}>
          <Image
            src={landingImage}
            alt={"group of people look on whiteboard"}
            className={styles.image}
          />
          <span>initiative</span>
        </div>
        <div className={styles.thirdLine}>
          for{" "}
          <div className={styles.flag}>
            <div /> <div />
          </div>{" "}
          <span className={styles.ukraineText}>Ukraine</span>
        </div>
      </h1>
      <p>
        We are introducing a new after-school activity - common projects
        developed together by groups of students and teachers - to help break
        the barriers in communication and relationship between them.
      </p>
      <Button onClick={clickHandler}>join the program</Button>
    </div>
  );
};

export default Landing;
