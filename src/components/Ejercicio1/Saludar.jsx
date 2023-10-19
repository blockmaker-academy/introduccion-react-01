export default function Saludar(props) {
    return <h2 className="titulo-ejercicio">Hola {props.nombre}</h2>
  }

 // Se puede utilizar destructuring y se puede sustituir Saludar(props) por Saludar({nombre}) y {props.Saludar} por {nombre}