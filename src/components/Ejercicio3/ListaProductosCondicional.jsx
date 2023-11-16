export default function ListaCondicional(props) {
  return (
    <div>
      <h3>Lista de Productos</h3>
      {props.productosCondicional.length === 0 ? (
        <p>La lista está vacía</p>
      ) : (
        <ul>
          {props.ListaCondicional.map((productoCondicional, index) => (
            <li key={index}> {productoCondicional} </li>
          ))}
        </ul>
      )}
    </div>
  );
}
