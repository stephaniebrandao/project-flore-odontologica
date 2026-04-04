import AccordionItem from "./AccordionItem";

export interface IAccordion {
    data: any[];
}

function Accordion({ data }: IAccordion) {

  return (
    <>
    <div>
        {data.map((el, num) => {
            return <AccordionItem title={el.title} key={num}>
                <p>{el.text}</p>
                <p>{el.listOne}</p>
                <p>{el.listTwo}</p>
                <p>{el.listThree}</p>
            </AccordionItem>
        })}
    </div>
    </>
  );
}

export default Accordion;
