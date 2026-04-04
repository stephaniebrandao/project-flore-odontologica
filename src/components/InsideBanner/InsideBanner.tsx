import type { ReactNode } from "react";
import styles from "./insideBanner.module.css"

interface IInsideBanner {
  title: string;
  info: string | ReactNode;
}

function InsideBanner({ title, info }: IInsideBanner) {
  return (
    <>
      <section className={styles.childrenContainer}>
        <h2>{title}</h2>
        <p>{info}</p>
      </section>
    </>
  );
}

export default InsideBanner;
