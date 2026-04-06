import AccordionItem from "./AccordionItem";

export type AccordionData = {
  title: string,
  text: string,
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
        {data.map((el) => {
            return <AccordionItem title={el.title}>
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
