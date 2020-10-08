import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Sugestoes from '../components/sugestoes'
import Footer from '../components/footer'


export default function Home() {
  return (
    <div>
      <Navbar />
      <Slider />
      <div className="search-bar">
        <div className="container">
          <div>
            <h3>Encontre suas passagens de barco.</h3>
            <div className="row">
              <div className="form-group col-md-3">
                <label>Origem</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label>Destino</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label>Data de Ida</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label>&nbsp;</label>
                <a href="/sobres"><button className="btn btn-primary d-block">Buscar</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sugestoes />
      <Footer />
    </div>
  )
}