import { Link } from "react-router";
import "./footer.css";
import Button from "../Button/Button";
import Instagram from "../../assets/Instagram";
import LinkedIn from "../../assets/LinkedIn";
import Deezer from "../../assets/Deezer";

function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="flore-footer">
        <section className="image-span">
          <Link to="/">
            <img
              src="/src/components/Images/Logo Vertical - verde - cópia.png"
              alt="Logo Vertical Flore - verde"
              width={110}
              height={110}
            />
          </Link>
          <span className="flore-florescer">Venha florescer conosco!</span>
        </section>
        <nav>
          <ul className="ul-footer">
            <div className="sobre-fac-corpo">
              <li>
                <Link to="sobre-nos">
                  <Button variant={"secondary"} isActive={false}>
                    SOBRE NÓS
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="facilidades">
                  <Button variant={"secondary"} isActive={false}>
                    FACILIDADES
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="corpo-clinico">
                  <Button variant={"secondary"} isActive={false}>
                    CORPO CLÍNICO
                  </Button>
                </Link>
                <Button variant={"tertiary"} isActive={false}>
                  Diretora Clínica
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Especialistas
                </Button>
              </li>
            </div>
            <div className="espec">
              <li>
                <Link to="especialidades">
                  <Button variant={"secondary"} isActive={false}>
                    ESPECIALIDADES
                  </Button>
                </Link>
                <Button variant={"tertiary"} isActive={false}>
                  Prótese Dentária
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Cirurgia Oral
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Implantes Dentários
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Endodontia
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Ortodontia
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Odontologia Infantil
                </Button>
                <Button variant={"tertiary"} isActive={false}>
                  Mais...
                </Button>
              </li>
            </div>
            <div className="info-perg-cont">
              <li>
                <Link to="informacoes">
                  <Button variant={"secondary"} isActive={false}>
                    INFORMAÇÕES IMPORTANTES
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="perguntas">
                  <Button variant={"secondary"} isActive={false}>
                    PERGUNTAS FREQUENTES
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="contatos">
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

      <span className="direitos-flore">
        © {currentYear} Flore Odontológica. Todos os direitos reservados.
      </span>
    </footer>
  );
}

export default Footer;
