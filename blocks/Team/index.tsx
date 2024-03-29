import outerStyles from "@/blocks/Grants/Grants.module.css";
import styles from "./Team.module.css";
import Image, { StaticImageData } from "next/image";
import teamImg from "assets/images/team/team.jpg";
import mama from "assets/images/team/mama.jpg";
import ys from "assets/images/team/ys.png";
import ds from "assets/images/team/ds.png";
import ms from "assets/images/team/ms.png";
import pl from "assets/images/team/pl.png";
import vp from "assets/images/team/vp.png";
import ab from "assets/images/team/ab.png";
import myDarling from "assets/images/team/my-darling.png";
interface Member {
  name: string;
  country: "Poland" | "Ukraine";
  title: string;
  image: StaticImageData;
}

const members: Member[] = [
  {
    name: "Yulia Shevchuk",
    country: "Ukraine",
    title: "Project manager and copywriter",
    image: ys,
  },
  {
    name: "Dasha Shcherbatiuk",
    country: "Ukraine",
    title: "Process designer",
    image: ds,
  },
  {
    name: "Mykhailo Serhiichuk",
    country: "Ukraine",
    title: "PR (public relations) professional",
    image: ms,
  },
  {
    name: "Pavlo Ladonko",
    country: "Ukraine",
    title: "Process designer",
    image: pl,
  },
  {
    name: "Vitalina Petrova",
    country: "Ukraine",
    title: "Grant advisor",
    image: vp,
  },
  {
    name: "Arsenii Boiko",
    country: "Ukraine",
    title: "Web-designer",
    image: ab,
  },
  {
    name: "Maria Yaremenko",
    country: "Ukraine",
    title: "Frontend-developer",
    image: myDarling,
  },
  {
    name: "Ela Łazarewicz-Wyrzykowska",
    country: "Poland",
    title: "PhD, Mentor",
    image: mama,
  },
];

const Team = () => {
  return (
    <div className={outerStyles.container}>
      <h2 className={styles.heading}>about us</h2>
      <p className={styles.paragraph}>
        We are seven Ukrainians who come from different parts of Ukraine. We met
        through the <a href={"https://www.ua.splot.institute/"}>Splot UA</a>{" "}
        Resiedency, with a common idea: to make our education system better.
      </p>
      <div className={styles.team}>
        {members.map(({ name, country, title, image }, index) => (
          <div key={index} className={styles.member}>
            <Image src={image} alt={name} />
            <h4>{`${name} ${country === "Ukraine" ? "🇺🇦" : "🇵🇱"}`}</h4>
            <p>{title}</p>
          </div>
        ))}
        <Image src={teamImg} alt={"team"} className={styles.teamPhoto} />
      </div>
    </div>
  );
};

export default Team;
