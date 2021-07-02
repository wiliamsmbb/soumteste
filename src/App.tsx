
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm ,SubmitHandler} from 'react-hook-form';

interface Inputs{
  login: string;
  senha: string;
}


function App() {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-5">
          <div className="row">
        <input type="text" className="form-input" placeholder="Login" {...register("login")} />
        </div>
        <div className="row mt-5">
        <input type="password" className="form-input" placeholder="Senha" {...register("senha")}/> 
        </div>
        </div>
        <button className="btn btn-outline-success">Login</button>

      </form>
      
          
      </header>
    </div>
  );
}

export default App;