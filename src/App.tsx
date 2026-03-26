import "./App.css";
import MapPin from "./assets/MapPin";
import Phone from "./assets/Phone";

function App() {
  return (
    <>
      <div className="container-consulta">
        <p>ONLINE OU POR TELEFONE</p>
        <h1>MARQUE JÁ A SUA CONSULTA</h1>
      </div>

      <article>
        <div className="container-info">
          <figure>
            <img
              src="/src/components/Images/flore-entrada.png"
              alt="Recepção da clínica Flore"
              width={150}
              height={150}
            />
          </figure>

          <div className="nome-horas">
            <h2>Flore Odontológica</h2>
            <h3>Mangabeira VII</h3>
            <div className="horarios">
              <p>
                <b>segunda a sexta:</b> 9h às 21h
              </p>
              <p>
                <b>sábado:</b> 8h às 12h
              </p>
              <p>
                <b>domingo:</b> encerrado
              </p>
            </div>
          </div>
        </div>

        <div className="container-endereco">
          <span>
            R. Des. Júlio Rique Filho, 12 - Mangabeira VII, João Pessoa - PB,
            58058-236, Brasil
          </span>

          <a href="https://maps.app.goo.gl/qDHLr3eympCKU7sC7">
            <p>
              <MapPin /> Direções via Google Maps
            </p>
          </a>
          <p>
            <Phone />
            <a href="tel:+55 83 99895-0550"> 83 99895-0550</a>
          </p>
        </div>
      </article>
    </>
  );
}

export default App;
