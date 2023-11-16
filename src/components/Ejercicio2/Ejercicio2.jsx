import TituloEjercicio from "../TituloEjercicio";
import { productos } from "../../constants/productos";
import Lista from "./ListaProductos";

export default function Ejercicio2() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Éste es el Ejercicio 2</TituloEjercicio>
      <Lista productos={productos}></Lista>
    </section>
  );
}
