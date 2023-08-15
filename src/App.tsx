import Contato from "./components/Contato";
import Formulario from "./containers/Formulario";
import EstiloGlobal, { Container } from "./styles";

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Formulario />
        <Contato />
      </Container>
    </>
  );
}

export default App;
