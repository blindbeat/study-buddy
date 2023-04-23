import extraStyles from "@/blocks/Explanation/Explanation.module.css";
import styles from "./Steps.module.css";
import { ReactNode } from "react";
import classNames from "classnames";

const blockEntries: ReactNode[] = [
  "Get acquainted with the progress of the project",
  "Read the conditions of participation",
  "Read the instructions for filling out a grant application",
  "Fill out the grant application",
  "In case of a positive response, sign a contract with the donor",
  "Participation in accordance with the terms and conditions and a happy community as a result",
];
const Steps = () => {
  return (
    <div className={extraStyles.container}>
      <h2 className={extraStyles.heading}>
        how to apply
        <span className={extraStyles.secondLine}> for funding</span>
      </h2>
      <div>
        {blockEntries.map((text, index) => (
          <div
            key={index}
            className={classNames(extraStyles.block, styles.block)}
          >
            <span className={styles.stepTitle}>Step {index + 1}</span>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
