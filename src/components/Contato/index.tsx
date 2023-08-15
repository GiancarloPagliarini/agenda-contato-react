import imgContato from "../../images/contatos.png";
import { Botao } from "../../styles";
import * as S from "./styles";

const Contato = () => {
  return (
    <>
      <S.CardContato>
        <S.ContainerStatus>
          <img src={imgContato} alt="logo contato" />
          <ul>
            <li>Giancarlo</li>
            <li>51997053222</li>
            <li>giancarlo@gmail.com</li>
          </ul>
        </S.ContainerStatus>
        <S.ContainerButtons>
          <Botao>DELETAR</Botao>
          <Botao>EDITAR</Botao>
        </S.ContainerButtons>
      </S.CardContato>
    </>
  );
};

export default Contato;
