import styles from "./Explanation.module.css";
import { ReactNode } from "react";

interface BlockTexts {
  heading: ReactNode;
  text: ReactNode;
}

const blockEntries: BlockTexts[] = [
  {
    heading: "Present idea to teachers and students",
    text: "(Announcement in school media, on common events, on teacher`s conferences)",
  },
  {
    heading: "Choose the field of the project",
    text: "Decisions should be from students.Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: "Moderator recruitment",
    text: "Decisions should be from students.Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: "Organize groups of 2 teachers and 14 students each group",
    text: "Decisions should be from students.Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: "Create a schedule for working group",
    text: "Decisions should be from students.Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: "Regular meetings",
    text: "Decisions should be from students.Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: "Presentation",
    text: "Presentation of the project to whole school community in a friendly atmosphere",
  },
  {
    heading: "Project implementation",
    text: "Presentation of the project to whole school community in a friendly atmosphere",
  },
];
const Explanation = () => {
  return (
    <div>
      <h2 className={styles.heading}>
        how does
        <br />
        <span className={styles.secondLine}>it work?</span>
      </h2>
      <div>
        {blockEntries.map(({ text, heading }, index) => (
          <div key={index} className={styles.block}>
            <span>0{index}</span>
            <h4>{heading}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explanation;
