import { useEffect, useState } from "react";
import Header from "../Header/Header";
import styles from "./corpoClinico.module.css";
import type { ICorpoClinico } from "../../types";
import { supabase } from "../../supabaseClient";
import Card from "../Card/Card";

function CorpoClinico() {
  const [corpoClinico, setCorpoClinico] = useState<ICorpoClinico[]>([]);

  useEffect(() => {
    const fetchCorpoClinico = async () => {
      const { data: newCorpoClinico, error } = await supabase
        .from("profissionais")
        .select();

      if (error) console.error("Error fetching: ", error);
      console.log("newCorpoClinico", newCorpoClinico);
      setCorpoClinico(newCorpoClinico || []);
    };

    fetchCorpoClinico();
  }, []);

  const subtitle =
    "Conheça os especialistas da Flore que unem técnica avançada e um olhar atento para transformar o seu sorriso!";

  return (
    <>
      <Header
        title={"Corpo Clínico"}
        subtitle={subtitle}
        variant={"first"}
      />

      <div className={styles.corpoClinicoGrid}>
        {corpoClinico.map((profissional) => (
          <Card
            image={
              <img
                src={profissional.imagens}
              />
            }
            title={profissional.nome}
            subtitle={profissional.especialidade}
            variant={"cclinico"}
          />
        ))}
      </div>
    </>
  );
}

export default CorpoClinico;
