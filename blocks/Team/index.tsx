import outerStyles from "@/blocks/Grants/Grants.module.css";
import styles from "./Team.module.css";
import Image, { StaticImageData } from "next/image";
import teamImg from "assets/images/team/team.jpg";
interface Member {
  name: string;
  country: "Poland" | "Ukraine";
  title: string;
  image: StaticImageData;
}

const members: Member[] = [
  {
    name: "Ela Łazarewicz-Wyrzykowska",
    country: "Poland",
    title: "PhD, Mentor",
    image: teamImg,
  },
  {
    name: "Yulia Shevchuk",
    country: "Ukraine",
    title: "Project manager and copywriter",
    image: teamImg,
  },
  {
    name: "Dasha Shcherbatiuk",
    country: "Ukraine",
    title: "Methodist",
    image: teamImg,
  },
  {
    name: "Vitalina Petrova",
    country: "Ukraine",
    title: "Grant advisor",
    image: teamImg,
  },
  {
    name: "Arsenii Boiko",
    country: "Ukraine",
    title: "Web-designer",
    image: teamImg,
  },
  {
    name: "Maria Yaremenko",
    country: "Ukraine",
    title: "Frontend-developer",
    image: teamImg,
  },
];

const Team = () => {
  return (
    <div className={outerStyles.container}>
      <h2 className={styles.heading}>
        the most
        <br />
        productive team
      </h2>
      <div className={styles.team}>
        {members.map(({ name, country, title, image }, index) => (
          <div key={index} className={styles.member}>
            <Image src={image} alt={name} />
            <h4>{`${name} ${country === "Ukraine" ? "🇺🇦" : "🇵🇱"}`}</h4>
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
