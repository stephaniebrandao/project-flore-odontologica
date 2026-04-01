import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import "./especialidades.css";
import type { IEspecialidades } from "../../types";
import Card from "../Card/Card";
import Header from "../Header/Header";

function Especialidades() {
  const [especialidades, setEspecialidades] = useState<IEspecialidades[]>([]);
  console.log("especialidades", especialidades);

  useEffect(() => {
    const fetchEspecialidades = async () => {
      const { data: newEspecialidades, error } = await supabase
        .from("especialidades")
        .select();

      if (error) console.error("Error fetching:", error);
      console.log("newEspecialidades", newEspecialidades);
      setEspecialidades(newEspecialidades || []);
    };

    fetchEspecialidades();
  }, []);

  const subtitle =
    "Explore como cada uma de nossas especialidades pode transformar o seu bem-estar.";
  return (
    <>
      <Header
        title={"Especialidades Focadas na Sua Saúde"}
        subtitle={subtitle}
        variant={"first"}
      />
      <div className="title-specs">
        <p>Estamos prontos para cuidar de si!</p>
        <aside>Venha florescer conosco!</aside>
      </div>
      <div className="especialidades-api">
        {especialidades.map((especialidade) => (
          <Card
            image={
              <img
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
                src={especialidade.imagem}
              />
            }
            title={especialidade.nome}
            subtitle={especialidade.descricao}
            variant={"specs"}
          />
        ))}
      </div>
    </>
  );
}

export default Especialidades;
