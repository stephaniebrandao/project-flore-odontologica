import Button from "../Button/Button";
import "./sobreNos.css"

function SobreNos () {
    return (
        <>
          <section>
            <div>
              <img
                className="kalygia-flore-img"
                src="src/components/Images/photo_kalygia.jpg"
                alt="Dra. Kalygia Cavalcanti - diretora clínica"
                width={205}
                height={300}
              />
            </div>
            <div className="intro-flore">
              <h1>Sua jornada para um sorriso radiante começa aqui!</h1>
              <p>
                Na Flore Odontológica, acreditamos que cada sorriso carrega uma
                história única — e é nossa missão cuidar de cada uma com dedicação,
                precisão e carinho.
              </p>
    
              <p>
                Sob a direção clínica da Dra. Kalygia Cavalcanti, nossa equipe une
                tecnologia de ponta, atendimento humanizado e uma abordagem
                personalizada para transformar a experiência odontológica em algo
                leve, seguro e inspirador.
              </p>
    
              <p>
                A primeira consulta é o início dessa jornada: um momento de escuta,
                avaliação e acolhimento, onde entendemos suas necessidades e
                traçamos juntos o melhor caminho para cuidar do seu sorriso. Clique{" "}
                <span>aqui</span> para saber como funciona!
              </p>
              <aside>Venha florescer conosco!</aside>
            </div>
          </section>
          <div className="consulta-flore">
            <Button variant={"nav"} isActive={false}>
              Marque aqui a sua consulta!
            </Button>
          </div>

          <div className="container">
            <div className="children-container">
              <h2>Conheça os nossos dentistas!</h2>
              <p>
                Mais do que tratar sorrisos, cuidamos de pessoas! Para garantir
                excelência em cada tratamento, contamos com um corpo clínico de
                especialistas em diversas áreas da Odontologia, que estão prontos
                para oferecer um atendimento personalizado e seguro para você e toda
                a sua família.
              </p>
              <Button variant={"nav"} isActive={false}>
                Saiba mais!
              </Button>
            </div>
          </div>
        </>
      );
}

export default SobreNos;