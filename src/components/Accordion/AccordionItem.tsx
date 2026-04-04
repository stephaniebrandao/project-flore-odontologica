import styles from "./accordion.module.css";
import { useState, type ReactNode } from "react";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.header} ${isOpen ? styles.open : ""}`} onClick={handleToggle}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <p className={styles.icon}>{isOpen ? "-" : "+"}</p>
          </div>
          {isOpen && <div className={styles.content}>{children}</div>}
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
