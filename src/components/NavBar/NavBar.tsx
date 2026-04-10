import styles from "./navbar.module.css";
import Button from "../Button/Button";
import { Link } from "react-router";
import logoVerticalFlore from "../Images/LogoVertical-verde.png"
import { useState } from "react";
import Menu from "../../assets/Menu";

function NavBar() {

  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header>
      <div className={styles.gradientBar}>
        <Link to="/">
          <img
            className={styles.imageFlore}
            src={logoVerticalFlore}
            alt="Logo Vertical Flore - verde"
            width={150}
            height={150}
          />
        </Link>
      </div>

      <nav className={styles.navPrincipal} aria-label="Navegação Principal">
        <button className="styles.hamburger" onClick={toggleMenu} aria-label="Abrir menu">
        <Menu/>
        </button>
        <ul className={openMenu ? styles.menuAtivo : ""}>
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
                FACILIDADES E INFORMAÇÕES
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
            <Link to="consulta">
              <Button variant={"primary"} isActive={false}>
                MARQUE A SUA CONSULTA
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
