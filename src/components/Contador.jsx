import { useState } from "react";
import { Button } from "react-bootstrap";

const Contador = () => {

const [numero, setNumero] = useState(0);

    return (
        <section>
            <h3>Contador</h3>
            <h3>{numero}</h3>
            <Button variant="primary" onClick={()=> setNumero(numero + 1) }>+1</Button>
            // todo: agregar un boton que reste en 1 el contendido del state
        </section>
    );
};

export default Contador;