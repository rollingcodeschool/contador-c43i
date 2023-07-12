import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador";

function App() {
const estado= true;

  return (
    <Container>
      {/* <Titulos /> */}
      <Titulos subtitulo="Este subtitulo fue creado con props" estadoNuevo={estado} ></Titulos>
      <Contador></Contador>
    </Container>
  )
}

export default App;
