import AccordionItem from "./AccordionItem";

export type AccordionData = {
  title: string,
  text?: string,
  listOne?: string,
  listTwo?: string,
  listThree?: string
}
export interface IAccordion {
    data: AccordionData[];
}

function Accordion({ data }: IAccordion) {

  return (
    <>
    <div>
        {data.map((element) => {
            return <AccordionItem title={element.title}>
                <p>{element.text}</p>
                <p>{element.listOne}</p>
                <p>{element.listTwo}</p>
                <p>{element.listThree}</p>
            </AccordionItem>
        })}
    </div>
    </>
  );
}

export default Accordion;
