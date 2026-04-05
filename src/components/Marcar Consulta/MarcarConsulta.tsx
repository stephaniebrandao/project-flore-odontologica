import { useEffect, useState } from "react";
import Button from "../Button/Button";
import styles from "./marcarConsulta.module.css";
import { supabase } from "../../supabaseClient";
import type { Horarios, IEspecialidades } from "../../types";
import Header from "../Header/Header";

function MarcarConsulta() {
  const [newMarcacao, setNewMarcacao] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    especialidade: "",
    horarios: "",
    data: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("marcacao").insert([newMarcacao]);

    if (error) {
      throw new Error(error.message);
    }

    setNewMarcacao({
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
      especialidade: "",
      horarios: "",
      data: "",
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleButtonSubmit = async (e: any) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      await handleSubmit(e);
      alert("Consulta marcada!");
      resetForm();
      setIsSubmitting(false);
    } catch (error) {
      alert("Tente novamente!");
      setIsSubmitting(false);
    }
  };

  const initialState = {
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
    especialidade: "",
    horarios: "",
    data: "",
  };

  const resetForm = () => {
    setNewMarcacao(initialState);
  };

  // -----------------

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

  const [horarios, setHorarios] = useState<Horarios[]>([]);

  useEffect(() => {
    const fetchHorarios = async () => {
      const { data: newHorarios } = await supabase.from("horarios").select();

      setHorarios(newHorarios || []);
    };

    fetchHorarios();
  }, []);

  const subtitle =
    "Marque aqui a sua consulta na Flore Odontológica. A sua marcação será confirmada por e-mail e/ou mensagem.";

  return (
    <>
      <Header
        title={"Marque aqui a sua consulta!"}
        subtitle={subtitle}
        variant={"first"}
      />

      <section>
        <div className={styles.secaoMarcacao}>
          <form onSubmit={handleButtonSubmit} action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              placeholder="Preencha com o seu nome completo"
              value={newMarcacao.nome}
              onChange={(e) =>
                setNewMarcacao((prev) => ({ ...prev, nome: e.target.value }))
              }
              required
            />
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder="Preencha com o seu e-mail"
              value={newMarcacao.email}
              onChange={(e) =>
                setNewMarcacao((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              placeholder="(xx) xxxxx-xxxx"
              value={newMarcacao.telefone}
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  telefone: (e.target.value),
                }))
              }
              required
            />
            <label htmlFor="especialidade">Especialidade:</label>
            <select
              name="especialidades"
              id="especialidades"
              value={newMarcacao.especialidade}
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  especialidade: e.target.value,
                }))
              }
              required
            >
              <option value="">Selecione uma especialidade</option>
              {especialidades.map((especialidade) => (
                <option key={especialidade.id} value={especialidade.nome}>
                  {especialidade.nome}
                </option>
              ))}
            </select>
            <label htmlFor="date">Data da consulta:</label>
            <input
              type="date"
              value={newMarcacao.data}
              onChange={(e) =>
                setNewMarcacao((prev) => ({ ...prev, data: e.target.value }))
              }
              required
            />

            <label htmlFor="horarios">Horários:</label>
            <select
              name="horarios"
              id="horarios"
              value={newMarcacao.horarios}
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  horarios: e.target.value,
                }))
              }
              required
            >
              <option value="">Selecione um horário</option>
              {horarios.map((horario) => (
                <option key={horario.id} value={horario.hora}>
                  {horario.hora}
                </option>
              ))}
            </select>

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              name="mensagem"
              id=""
              placeholder="Mensagem para a equipe da clínica (opcional): sintomas, dúvidas ou observações..."
              value={newMarcacao.mensagem}
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  mensagem: e.target.value,
                }))
              }
            />
            <div className={styles.btnForm}>
              <Button variant={"nav"} isActive={true} isDisabled={isSubmitting}>
                Enviar
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default MarcarConsulta;
