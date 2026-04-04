import WhatsApp from "../../assets/WhatsApp";
import Header from "../Header/Header";
import styles from "./contatos.module.css";

function Contatos() {
  const subtitle =
    "Estamos prontos para cuidar do seu sorriso. Entre em contato e agende sua avaliação na Flore Odontológica.";
  return (
    <>
      <Header title={"Fale Conosco"} subtitle={subtitle} variant={"first"} />
      <div className={styles.whatsapp}>
        <h3>Mande-nos uma mensagem pelo WhatsApp:</h3>
        <p>
          <a
            href="https://api.whatsapp.com/send/?phone=5583996152173&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <WhatsApp /> Clique aqui!
          </a>
        </p>
      </div>
    </>
  );
}

export default Contatos;
