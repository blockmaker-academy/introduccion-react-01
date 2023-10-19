import ListaProductos from './Lista'
import TituloEjercicio from '../TituloEjercicio'
import { productos, productosCondicional } from '../../constants/productos'

export default function Ejercicio2() {
  return (
    <section className="caja-ejercicio">
      <TituloEjercicio>Este es el ejercicio 2</TituloEjercicio>
      <ListaProductos productos={productos} />
    </section>
  )
}
