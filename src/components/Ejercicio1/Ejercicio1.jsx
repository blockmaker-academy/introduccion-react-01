import TituloEjercicio from "../TituloEjercicio";
import Saludar from "./Saludar";
import SaludarMundo from "./SaludarMundo";

export default function Ejercicio1() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 1</TituloEjercicio>

      <Saludar nombre="Ervigio"/>
      <SaludarMundo nombre="Ervigio"/>
    </section>
  );
}
