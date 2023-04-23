import styles from "./Grants.module.css";
import Image from "next/image";
import moderator from "assets/images/moderator.png";
import fundraising from "assets/images/fundraising.png";
import Button from "@/components/Button";
const Grants = () => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>careers and grants</h2>
        <p>
          We are waiting for open-minded, brave and aspiring people! Apply to
          participate as an educational institution where the project will be
          held or as a moderator of the project team.
        </p>
      </div>
      <div className={styles.previews}>
        <div className={styles.moderator}>
          <span className={styles.title}>Moderator</span>
          <h3>
            Project Moderator: <br />
            Keeping Your Team on Track
          </h3>
          <a
            href={
              "https://docs.google.com/document/d/10gKHhLxbSh4UWoJHVsE9lFVAfj2INOhV"
            }
          >
            Find out more
          </a>
          <Image
            src={moderator}
            alt={"business woman"}
            className={styles.image}
          />
        </div>
        <div className={styles.fundraising}>
          <span className={styles.title}>Fundraising</span>
          <h3>
            Empowering Change: <br />A Grant Proposal
          </h3>
          <a
            href={
              "https://drive.google.com/file/d/1zDj0yETV3AMaEmPu5-rVF4USSUg9mXby/view?usp=share_link"
            }
          >
            Find out more
          </a>
          <Image src={fundraising} alt={"papers"} className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Grants;
