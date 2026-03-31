import { useEffect, useState } from "react";
import Button from "../Button/Button";
import "./marcarConsulta.css";
import { supabase } from "../../supabaseClient";
import type { Horarios, IEspecialidades } from "../../types";

function MarcarConsulta() {
  const [newMarcacao, setNewMarcacao] = useState({
    nome: "",
    email: "",
    telefone: 0,
    mensagem: "",
    especialidade: "",
    horarios: "",
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
      telefone: 0,
      mensagem: "",
      especialidade: "",
      horarios: "",
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
    } catch (error) {
      alert("Tente novamente!");
      setIsSubmitting(false);
    }
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

  return (
    <>
      <header className="header-consulta">
        <h1>Marque aqui a sua consulta!</h1>
        <h3>
          Marque aqui a sua consulta na Flore Odontológica. <br /> A sua
          marcação será confirmada por e-mail e/ou mensagem.
        </h3>
      </header>

      <section>
        <div className="secao-marcacao">
          <form onSubmit={handleButtonSubmit} action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              placeholder="Ana Silva"
              onChange={(e) =>
                setNewMarcacao((prev) => ({ ...prev, nome: e.target.value }))
              }
              required
            />
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder="seu@email.com"
              onChange={(e) =>
                setNewMarcacao((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              placeholder="83 99000-9000"
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  telefone: Number(e.target.value),
                }))
              }
              required
            />
            <label htmlFor="especialidade">Especialidade:</label>
            <select
              name="especialidades"
              id="especialidades"
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
            <input type="date" required />

            <label htmlFor="horarios">Horários:</label>
            <select
              name="horarios"
              id="horarios"
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
              onChange={(e) =>
                setNewMarcacao((prev) => ({
                  ...prev,
                  mensagem: e.target.value,
                }))
              }
            />
            <div className="btn-form">
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
