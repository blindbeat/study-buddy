import { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
const Button = ({
  children,
  className,
  ...rest
}: ComponentPropsWithoutRef<"button">) => {
  return (
    <button {...rest} className={classNames(styles.button, className)}>
      {children}
    </button>
  );
};

export default Button;
