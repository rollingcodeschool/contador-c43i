import { Container } from "react-bootstrap";
import "./App.css";
import Titulos from "./components/Titulos";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from "./components/Contador";

function App() {
  return (
    <Container>
      {/* <Titulos/> */}
      <Titulos></Titulos>
      <Contador></Contador>
    </Container>
  )
}

export default App;
