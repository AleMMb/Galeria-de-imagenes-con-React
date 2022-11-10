
import Titulo from './components/Header'
import Carta from './components/Card'
import Footer from './components/Footer'

function App() {
  return (
    <div className="main">
      <Titulo title='Galería de imágenes con React' />
      <div className="card_secction">
        <Carta src="imagenes/panda1.jpg" title="Hora de dormir" description="El oso panda es preferentemente nocturno y crepuscular, duerme unas 7 u 8 horas." />
        <Carta src="imagenes/panda2.jpg" title="Menú de un panda" description="Este oso come entre 12 y 38 kg de bambú cada día, esto representa el 99 % de su dieta" />
        <Carta src="imagenes/panda3.jpg" title="Alma de niños" description="A los osos panda les gusta mucho jugar con absolutamente todo, otros pandas, trepar árboles y nadar." />
      </div>
      <Footer />
    </div>
  )
}

export default App
