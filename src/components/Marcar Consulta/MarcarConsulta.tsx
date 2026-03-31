import { useState } from "react";
import Button from "../Button/Button";
import "./marcarConsulta.css";
import { supabase } from "../../supabaseClient";


function MarcarConsulta() {
  const [newTask, setNewTask] = useState({
    nome: "",
    email: "",
    telefone: 0,
    mensagem: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const { error } = await supabase.from("tasks").insert([newTask]);

    if (error) {
      console.error("Error adding task: ", error.message);
      return;
    }

    setNewTask({
      nome: "",
      email: "",
      telefone: 0,
      mensagem: "",
    });
  };

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
          <form onSubmit={handleSubmit} action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              placeholder="Ana Silva"
              onChange={(e) =>
                setNewTask((prev) => ({ ...prev, nome: e.target.value }))
              }
              required
            />

            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              placeholder="seu@email.com"
              onChange={(e) =>
                setNewTask((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />

            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              placeholder="83 99000-9000"
              onChange={(e) =>
                setNewTask((prev) => ({ ...prev, telefone: Number(e.target.value) }))
              }
              required
            />

            {/* <label htmlFor="especialidade">Especialidade:</label>
            <select name="" id="" required>
              <option value=""></option>
            </select>
            código para mostrar especialidades de forma dinâmica */}

            {/* <label htmlFor="date">Data da consulta:</label>
            <input type="date" required />
            {/*código para mostrar apenas datas disponíveis*/}

            {/* <label htmlFor="time">Horário da consulta:</label>
            <input type="time" required />
            código para mostrar apenas horários disponíveis */}

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea
              name="mensagem"
              id=""
              placeholder="Mensagem para a equipe da clínica (opcional): sintomas, dúvidas ou observações..."
              onChange={(e) =>
                setNewTask((prev) => ({ ...prev, mensagem: e.target.value }))
              }
            />

            <div className="btn-form">
              <Button variant={"nav"} isActive={false}>
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
