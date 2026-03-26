function MarcarConsulta() {
  return (
    <>
      <header>
        <h1>Marque aqui a sua consulta!</h1>
        <h3>
          Marque aqui a sua consulta na Flore Odontológica. A sua marcação será
          confirmada por e-mail e/ou mensagem.
        </h3>
      </header>

      <section>
        <form action="#" method="post">
            <label htmlFor="name">Nome:</label>
            <input type="text" required/>


            <label htmlFor="email">E-mail:</label>
            <input type="email" required/>


            <label htmlFor="telefone">Telefone:</label>
            <input type="tel" required/>

            <label htmlFor="especialidade">Especialidade:</label>
            <select name="" id="" required>
                <option value=""></option>
            </select>
            {/*código para mostrar especialidades de forma dinâmica*/}

            <label htmlFor="date">Data da consulta:</label>
            <input type="date" required/>
            {/*código para mostrar apenas datas disponíveis*/}

            <label htmlFor="time">Horário da consulta:</label>
            <input type="time" required/>
            {/*código para mostrar apenas horários disponíveis*/}

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea name="mensagem" id="" placeholder="Mensagem para a equipe da clínica (opcional): sintomas, dúvidas ou observações..." />
        </form>
      </section>
    </>
  );
}

export default MarcarConsulta;
