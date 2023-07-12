const Titulos = ({ subtitulo, estadoNuevo }) => {
  //aqui vamos a cargar toda la logica
  // if(condicion){

  // }else{

  // }
  // operador ternario
  // (condicion logica)? aqui hago si esta todo bien : aqui va lo que tendria el else
  return (
    // aqui tambien puedo escribir un poco de logica
    <section className="text-center">
      {/* aqui va todo el maquetado  */}
      <h1 className="display-4">Proyecto contador con react</h1>
      <h2 className="display-6">
        {subtitulo}, estado: {estadoNuevo ? "habilitado" : "deshabilitado"}
      </h2>
      <hr />
    </section>
  );
};

export default Titulos;
