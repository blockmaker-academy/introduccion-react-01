import TituloEjercicio from "../TituloEjercicio";
import { productosCondicional } from "../../constants/productos";
import ListaCondicional from "./ListaProductosCondicional";

export default function Ejercicio3(){
    return (
        <section class = "caja-ejercicio">
            <TituloEjercicio>Éste es el Ejercicio 3</TituloEjercicio>
            <ListaCondicional productosCondicional={productosCondicional}></ListaCondicional>

        </section>
    )
}