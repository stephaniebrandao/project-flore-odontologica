import Banner from "./components/Banner/Banner";
import Button from "./components/Button/Button";
import InsideBanner from "./components/InsideBanner/InsideBanner";
import styles from "./App.module.css";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { Link } from "react-router";
import Kalygia from "./components/Images/photo_kalygia.jpg"

function App() {
  const POSICAO_CLINICA = { lat: -7.167731, lng: -34.830455 };

  const nossosDentistas = (
    <p>
      Mais do que tratar sorrisos, cuidamos de pessoas! Para garantir excelência
      em cada tratamento, contamos com um corpo clínico de especialistas em
      diversas áreas da Odontologia, que estão prontos para oferecer um
      atendimento personalizado e seguro para você e toda a sua família.
    </p>
  );

  const nossaClinica = (
    <p>
      Localizada em Mangabeira VII, na cidade de João Pessoa - PB, a Flore
      Odontológica oferece um ambiente moderno e acolhedor projetado para o seu
      conforto. Venha nos visitar!
    </p>
  );
  return (
    <>
      <section className={styles.containerIndexFlore}>
        <div>
          <img
            className={styles.kalygiaFloreImg}
            src={Kalygia}
            alt="Dra. Kalygia Cavalcanti - diretora clínica"
            width={205}
            height={300}
          />
        </div>
        <div className={styles.introFlore}>
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
            traçamos juntos o melhor caminho para cuidar do seu sorriso.
          </p>
          <aside>Venha florescer conosco!</aside>
        </div>
      </section>

      <div className={styles.containerConsulta}>
        <p>ONLINE OU POR TELEFONE</p>
        <h1>MARQUE JÁ A SUA CONSULTA</h1>
      </div>

      <div className={styles.consultaFlore}>
        <Link to={"consulta"}>
          <Button variant={"consulta"} isActive={false}>
            Marque aqui!
          </Button>
        </Link>
      </div>

      <Banner variant={"withBg"}>
        <InsideBanner
          title={"Conheça os nossos dentistas!"}
          info={nossosDentistas}
        />
        <Link to={"corpo-clinico"}>
        <Button variant={"consulta"} isActive={false}>
          Saiba mais!
        </Button>
        </Link>
      </Banner>

      <Banner variant={"withoutBg"}>
        <InsideBanner title={"A nossa clínica"} info={nossaClinica} />
      </Banner>

      <section className={styles.containerMapa}>
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
          <Map
            className={styles.mapa}
            defaultCenter={POSICAO_CLINICA}
            defaultZoom={16}
            gestureHandling="cooperative"
            disableDefaultUI={false}
          >
            <Marker position={POSICAO_CLINICA} />
          </Map>
        </APIProvider>
      </section>
    </>
  );
}

export default App;