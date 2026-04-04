import MapPin from "../../assets/MapPin";
import Phone from "../../assets/Phone";
import Card from "../Card/Card";
import styles from "./infoFlore.module.css";
import entradaFlore from "../Images/flore-entrada.png";

function InfoFlore() {
  const horarios = (
    <div>
      <ul>
        <li>
          <b>segunda a sexta:</b> 9h às 21h
        </li>
        <li>
          <b>sábado:</b> 8h às 12h
        </li>
        <li>
          <b>domingo:</b> encerrado
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <article>
        <div>
          <Card
            image={
              <img
                className={styles.recepcaoClinica}
                src={entradaFlore}
                alt="Recepção da clínica Flore"
                width={150}
                height={150}
              />
            }
            title={"Flore Odontológica"}
            subtitle={"Mangabeira VII"}
            info={horarios}
            variant={"normal"}
          />
        </div>

        <div className={styles.containerEndereco}>
          <span>
            R. Des. Júlio Rique Filho, 12 - Mangabeira VII, João Pessoa - PB,
            58058-236, Brasil
          </span>

          <a href="https://maps.app.goo.gl/qDHLr3eympCKU7sC7" target="_blank">
            <p>
              <MapPin /> Direções via Google Maps
            </p>
          </a>
          <p>
            <a href="tel:+55 83 99895-0550">
              <Phone /> 83 99895-0550
            </a>
          </p>
        </div>
      </article>
    </>
  );
}

export default InfoFlore;
