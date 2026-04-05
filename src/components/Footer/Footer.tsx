import { Link } from "react-router";
import styles from "./footer.module.css";
import Button from "../Button/Button";
import Instagram from "../../assets/Instagram";
import LinkedIn from "../../assets/LinkedIn";
import Deezer from "../../assets/Deezer";
import logoVertical from "../Images/LogoVertical-verde.png"

function Footer() {
  let currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className={styles.floreFooter}>
        <section className={styles.imageSpan}>
          <Link to="/" onClick={scrollToTop}>
            <img
              className={styles.imageFooter}
              src={logoVertical}
              alt="Logo Vertical Flore - verde"
              width={110}
              height={110}
            />
          </Link>
          <span className={styles.floreFlorescer}>Venha florescer conosco!</span>
        </section>
        <nav>
          <ul className={styles.ulFooter}>
            <div className={styles.sobreFac}>
              <li>
                <Link to="sobre-nos" onClick={scrollToTop}>
                  <Button variant={"secondary"} isActive={false}>
                    SOBRE NÓS
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="facilidades" onClick={scrollToTop}>
                  <Button variant={"secondary"} isActive={false}>
                    FACILIDADES
                  </Button>
                </Link>
              </li>
            </div>
            <div className={styles.especCorpo}>
              <li>
                <li>
                  <Link to="corpo-clinico" onClick={scrollToTop}>
                    <Button variant={"secondary"} isActive={false}>
                      CORPO CLÍNICO
                    </Button>
                  </Link>
                </li>
                <Link to="especialidades" onClick={scrollToTop}>
                  <Button variant={"secondary"} isActive={false}>
                    ESPECIALIDADES
                  </Button>
                </Link>
              </li>
            </div>
            <div className={styles.infoContatos}>
              <li>
                <Link to="informacoes" onClick={scrollToTop}>
                  <Button variant={"secondary"} isActive={false}>
                    INFORMAÇÕES IMPORTANTES
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="contatos" onClick={scrollToTop}>
                  <Button variant={"secondary"} isActive={false}>
                    CONTATOS
                  </Button>
                </Link>
              </li>
            </div>
          </ul>
        </nav>
      </div>
      <figure>
        <Link
          target="_blank"
          to={
            "https://www.instagram.com/floreodonto?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          }
        >
          <Instagram />
        </Link>
        <Link
          target="_blank"
          to={"https://www.linkedin.com/in/kalygia-cavalcanti-ab1960243"}
        >
          <LinkedIn />
        </Link>
        <Link
          target="_blank"
          to={
            "https://www.deezer.com/pt/playlist/8713851542?host=5051159662&utm_campaign=whatsapp-message&utm_source=user_sharing&utm_content=playlist-8713851542&deferredFl=1"
          }
        >
          <Deezer />
        </Link>
      </figure>

      <span className={styles.direitosFlore}>
        © {currentYear} Flore Odontológica. Todos os direitos reservados.
      </span>
    </footer>
  );
}

export default Footer;
