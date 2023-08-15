import { Botao, Campo } from "../../styles";
import { Form, Header } from "./styles";

const Formulario = () => {
  return (
    <>
      <Header>
        <h1>Agenda de contatos</h1>
        <h2>3 contatos na agenda</h2>
      </Header>
      <Form>
        <Campo type="text" placeholder="Nome" required />
        <Campo type="email" placeholder="E-mail" required />
        <Campo type="tel" placeholder="Telefone" required />
        <Botao type="submit">ADICIONAR</Botao>
      </Form>
    </>
  );
};

export default Formulario;
