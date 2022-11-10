import './App.css'
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/Cards';





function App() {
  return (
    <div className='App'>
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <Login />
        </div>
        <div>
        <Cards/>
        </div>
      
      </div>
    </div>
    </div>
  );
}

export default App;