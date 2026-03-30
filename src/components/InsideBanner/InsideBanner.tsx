import type { ReactNode } from "react";
import "./insideBanner.css"

interface IInsideBanner {
  title: string;
  info: string | ReactNode;
}

function InsideBanner({ title, info }: IInsideBanner) {
  return (
    <>
      <section className="children-container">
        <h2>{title}</h2>
        <p>{info}</p>
      </section>
    </>
  );
}

export default InsideBanner;
