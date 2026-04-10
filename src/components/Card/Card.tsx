import type { ReactNode } from "react";
import styles from "./card.module.css";

interface ICard {
  title: string | string[];
  subtitle: string | string[];
  info?: ReactNode | string[];
  image?: string | string[] | ReactNode;
  variant: "normal" | "specs" | "cclinico";
}

function Card({ title, subtitle, info, image, variant }: ICard) {
  return (
    <>
      <section className={styles[variant]}>
          <figure>{image}</figure>
        <div className={styles.titulosHoras}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className={styles.infoHorarios}>{info}</div>
        </div>
      </section>
    </>
  );
}

export default Card;
