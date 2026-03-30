import type { ReactNode } from "react";
import "./card.css";

interface ICard {
  title: string;
  subtitle: string;
  info: ReactNode;
  image?: string | ReactNode;
}

function Card({ title, subtitle, info, image }: ICard) {
  return (
    <>
      <section className="container-info">
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