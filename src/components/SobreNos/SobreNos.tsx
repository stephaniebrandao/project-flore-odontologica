import InfoFlore from "../Info-Flore/InfoFlore";
import InsideBanner from "../InsideBanner/InsideBanner";
import "./sobreNos.css";

function SobreNos() {
  const missao =
    "Proporcionar saúde bucal de excelência através de um atendimento personalizado, integrando ciência, estética e bem-estar para que cada paciente alcance sua melhor versão.";

  const visao =
    "Ser referência em odontologia humanizada e moderna no Brasil, sendo reconhecida não apenas pela precisão técnica, mas pela capacidade de transformar vidas através do sorriso.";

  const humanizacao =
    "Humanização: Tratamos pessoas, não apenas dentes. O acolhimento é nossa prioridade.";
  const etica =
    "Ética e Transparência: Clareza total em cada diagnóstico e conduta clínica.";
  const inovacao =
    "Inovação: Investimento constante em tecnologias que garantam tratamentos mais rápidos e confortáveis.";
  const excelencia =
    "Excelência: Rigor técnico em cada detalhe, do atendimento inicial ao pós-procedimento.";
  const sustentabilidade =
    "Sustentabilidade: Cuidado com o meio ambiente e com o ecossistema de saúde onde estamos inseridos.";

  const valores = `${humanizacao} ${etica} ${inovacao} ${excelencia} ${sustentabilidade}`;

  return (
    <>
      <article className="quem-somos">
        <h1>Quem somos</h1>
        <p>
          A Flore Odontológica nasceu do desejo de transformar a ida ao dentista
          em uma experiência de renovação. Acreditamos que um sorriso saudável é
          a base para a autoconfiança e que o cuidado com a boca reflete o
          carinho que temos com o corpo todo.
        </p>
        <p>
          Nossa história começou com o objetivo de criar um refúgio de saúde no
          coração da cidade, onde a tecnologia de ponta se encontra com um
          atendimento humano, leve e transparente.
        </p>
        <p>
          O nome "Flore" simboliza o florescer de uma nova fase na vida de
          nossos pacientes: aquela em que sorrir não causa timidez, mas sim
          orgulho.
        </p>
      </article>

      <section className="missao-visao-valores">
        <InsideBanner title={"Missão:"} info={missao} />

        <InsideBanner title={"Visão:"} info={visao} />

        <InsideBanner title={"Valores:"} info={valores} />
      </section>

      <div className="div-info-flore">
        <InfoFlore />
      </div>
    </>
  );
}

export default SobreNos;
