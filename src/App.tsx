
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm ,SubmitHandler} from 'react-hook-form';

interface Inputs{
  login: string;
  senha: string;
}


function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container mb-5">
          <div className="row">
        <input type="email" className="form-input" placeholder="Login"  {...register("login",{ required: true, maxLength: 30,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email inválido"
                        }
 })} />
        <p className="text-danger">{errors.login?.message}</p>
        </div>
        <div className="row mt-5">
        <input type="password" className="form-input" placeholder="Senha" required {...register("senha",{ required: true,  minLength:{value:5, message:"Senha deve ter mais que 5 caracteres"} })}/> 
        <p className="text-danger">{errors.senha?.message}</p>
        </div>
        </div>
        <button className="btn btn-primary btn-lg">Login</button>

      </form>
      
          
      </header>
    </div>
  );
}

export default App;