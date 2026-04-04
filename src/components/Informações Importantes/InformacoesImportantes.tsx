import info from "../../data";
import Accordion from "../Accordion/Accordion";
import Header from "../Header/Header";

function InformacoesImportantes() {
  const subtitle =
    "O seu bem-estar começa antes mesmo da consulta. Saiba como nos organizamos para cuidar de si.";

  return (
    <>
      <Header
        title={"Informações Importantes"}
        subtitle={subtitle}
        variant={"first"}
      />

      <div className="container">
        <Accordion data={info} />
      </div>
    </>
  );
}

export default InformacoesImportantes;
