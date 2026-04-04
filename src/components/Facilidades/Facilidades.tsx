import { useEffect, useState } from "react";
import styles from "./facilidades.module.css";
import { supabase } from "../../supabaseClient";
import Header from "../Header/Header";

function Facilidades() {
  const [convenios, setConvenios] = useState<{ nome: string }[]>([]);

  useEffect(() => {
    const fetchConvenios = async () => {
      const { data: newConvenios } = await supabase.from("convenios").select();

      setConvenios(newConvenios || []);
    };

    fetchConvenios();
  }, []);

  const subtitle = "Na Flore, acreditamos que um sorriso saudável deve ser acessível. Por isso, oferecemos diversas modalidades de atendimento e parcerias com os principais planos de saúde."

  return (
    <>

    <Header title={"Facilidades e Convênios"} subtitle={subtitle} variant={"first"}/>

        <ol className={styles.conveniosParticular}>
          <li>Planos de Saúde (Convênios)</li>
          <p>
            Trabalhamos com uma ampla rede credenciada para garantir que você
            utilize os benefícios do seu plano com a excelência do nosso
            atendimento.
          </p>
          <ul>
            {convenios.map((convenio, index) => (
              <li key={index}>{convenio.nome}</li>
            ))}
          </ul>
          <li>Atendimento Particular</li>
          <p className={styles.pagamentos}>
            Aceitamos cartões de crédito (parcelamento disponível), débito, PIX
            e numerário.
          </p>
        </ol>
    </>
  );
}

export default Facilidades;
