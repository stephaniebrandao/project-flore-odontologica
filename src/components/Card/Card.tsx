import type { ReactNode } from "react";
import "./card.css";

interface ICard {
  title: string | string[];
  subtitle: string | string[];
  info?: ReactNode | string[];
  image?: string | string[] | ReactNode;
  variant: "normal" | "specs";
}

function Card({ title, subtitle, info, image, variant }: ICard) {
  return (
    <>
      <section className={`${variant}`}>
        <div>
          <figure>{image}</figure>
        </div>
        <div className="titulos-horas">
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <div className="info-horarios">{info}</div>
        </div>
      </section>
    </>
  );
}

export default Card;
