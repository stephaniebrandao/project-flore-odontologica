import InfoFlore from "../Info-Flore/InfoFlore";
import InsideBanner from "../InsideBanner/InsideBanner";
import "./sobreNos.css";

function SobreNos() {
  const missao =
    "Proporcionar saúde bucal de excelência através de um atendimento personalizado, integrando ciência, estética e bem-estar para que cada paciente alcance sua melhor versão.";

  const visao =
    "Ser referência em odontologia humanizada e moderna no Brasil, sendo reconhecida não apenas pela precisão técnica, mas pela capacidade de transformar vidas através do sorriso.";

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

        <InsideBanner
          title={"Valores:"}
          info={
            <ul>
              <li>
                <strong>Humanização:</strong> Tratamos pessoas, não apenas dentes. O acolhimento
                é nossa prioridade.
              </li>
              <li>
                <strong>Ética e Transparência:</strong> Clareza total em cada diagnóstico e
                conduta clínica.
              </li>
              <li>
                <strong>Inovação:</strong> Investimento constante em tecnologias que garantam
                tratamentos mais rápidos e confortáveis.
              </li>
              <li>
                <strong>Excelência:</strong> Rigor técnico em cada detalhe, do atendimento
                inicial ao pós-procedimento.
              </li>
              <li>
                <strong>Excelência:</strong> Rigor técnico em cada detalhe, do atendimento
                inicial ao pós-procedimento.
              </li>
            </ul>
          }
        />
      </section>

      <div className="div-info-flore">
        <InfoFlore />
      </div>
    </>
  );
}

export default SobreNos;
