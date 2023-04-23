import styles from "./Explanation.module.css";
import { ReactNode } from "react";
import Button from "@/components/Button";

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
    text: "Decisions should be from students. Teachers or school administration have to organize this process - gather student representatives and conduct a survey of interests.",
  },
  {
    heading: (
      <>
        Recruit a <u>Moderator</u>
      </>
    ),
    text: "Recruitment is provided in two ways, for experts who are invited by organisers and for applicants who want to become a moderator.",
  },
  {
    heading: (
      <>
        <u>Organize groups</u> of 2 teachers and 14 students each group
      </>
    ),
    text: "Students (13-17 y.o.) apply based on their interest to the settled field of a project by motivation letter, teachers who want to participate apply by interview with a moderator.",
  },
  {
    heading: "Create a schedule for working group",
    text: "The creation of the work schedule should take place within the group in coordination with the personal wishes of the participants, the moderator and the school administration (so that they can provide the space for work).",
  },
  {
    heading: (
      <>
        Regular <u>meetings</u>
      </>
    ),
    text: "Program includes two parts - educational and practical, so participants will gain cool new knowledges. Also each member by confirming participation commits to be present on the 80% of meetings.",
  },
  {
    heading: "Presentation",
    text: (
      <>
        Presentation of the project to whole school community in a{" "}
        <b>friendly atmosphere</b>
      </>
    ),
  },
  {
    heading: "Project implementation",
    text: "Thanks to a well-developed plan, fundraising and teamwork, we are confident that in the end each group of participants will be able to bring their project to life!",
  },
];
const Explanation = () => {
  return (
    <div id={"explanation"}>
      <h2 className={styles.heading}>
        how does
        <span className={styles.secondLine}> it work?</span>
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
      <a
        className={"link"}
        href={
          "https://drive.google.com/file/d/1iE2ZBgoUAbXNfz4gEa2wcQR9epOQ0PSH/view?usp=sharing"
        }
      >
        Detailed handbook
      </a>
    </div>
  );
};

export default Explanation;
