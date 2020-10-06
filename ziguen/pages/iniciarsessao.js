import Navbar from '../components/navbar'
import Slider from '../components/slider'
import Footer from '../components/footer'


export default function Iniciarsessao() {
  return (
    <div>
      <Navbar />
      <div className="search-bar">
        <div className="container">
          <div>
          <h3>Login</h3>
            <div className="row">
              <div className="form-group col-md-3">
                <label>Login</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label>Senha</label>
                <input type="text" name="name" className="form-control" />
              </div>
              <div className="form-group col-md-3">
                <label>&nbsp;</label>
                <button className="btn btn-primary d-block">Logar</button>
              </div>     
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}