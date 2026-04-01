import "./accordion.css";
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
      <div className="container">
        <div className={`header ${isOpen ? "open" : ""}`} onClick={handleToggle}>
          <div className="title">
            <h2>{title}</h2>
            <p className="icon">{isOpen ? "-" : "+"}</p>
          </div>
          {isOpen && <div className="content">{children}</div>}
        </div>
      </div>
    </>
  );
}

export default AccordionItem;
