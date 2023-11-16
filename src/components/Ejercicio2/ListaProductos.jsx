function Lista(props){
    return (
    <div>
        <h3>Lista de productos</h3>
        <ul>
            {props.productos.map((producto, index) =>
            (<li key={index}>{producto}</li>))}
        </ul>
    </div>
)
}

export default Lista;

