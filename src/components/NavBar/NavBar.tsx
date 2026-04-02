import "./navbar.css";
import Button from "../Button/Button";
import { Link } from "react-router";
import logoVerticalFlore from "../Images/LogoVertical-verde.png"

function NavBar() {
  return (
    <header>
      <nav className="nav-sup" aria-label="Navegação Superior">
        <ul>
          <li>
            <Link to="consulta">
              <Button variant={"nav"} isActive={false}>
                Marque aqui a sua consulta
              </Button>
            </Link>
          </li>
          <li>
            <Link to="informacoes">
              <Button variant={"nav"} isActive={false}>
                Informações Importantes
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="gradient-bar">
        <Link to="/">
          <img
            className="image-flore"
            src={logoVerticalFlore}
            alt="Logo Vertical Flore - verde"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <nav className="nav-principal" aria-label="Navegação Principal">
        <ul>
          <li>
            <Link to="sobre-nos">
              <Button variant={"primary"} isActive={false}>
                SOBRE NÓS
              </Button>
            </Link>
          </li>
          <li>
            <Link to="facilidades">
              <Button variant={"primary"} isActive={false}>
                FACILIDADES
              </Button>
            </Link>
          </li>
          <li>
            <Link to="corpo-clinico">
              <Button variant={"primary"} isActive={false}>
                CORPO CLÍNICO
              </Button>
            </Link>
          </li>
          <li>
            <Link to="especialidades">
              <Button variant={"primary"} isActive={false}>
                ESPECIALIDADES
              </Button>
            </Link>
          </li>
          <li>
            <Link to="contatos">
              <Button variant={"primary"} isActive={false}>
                CONTATOS
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
