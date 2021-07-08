
import logo from '../../logo.svg';
import {  useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';
import { makeLogin } from 'core/utils/request';
import { useState } from 'react';
import { saveSessionData } from 'core/utils/auth';
interface Inputs {
  username: string;
  password: string;
}
type LocationState = {
  from:string;
}
const Login = () => {
  const history = useHistory();
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [hasError, setHasError] = useState(false);
  const location = useLocation<LocationState>();
  const { from } = location.state || { from: { pathname: "/home" } };

  const onSubmit = (data: Inputs) => {
    makeLogin(data)
      .then(response => {
        setHasError(false);
        saveSessionData(response.data);
        history.replace(from);
      })
      .catch(() => { setHasError(true); })
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {hasError && (
                <div className="alert alert-danger mt-5 login-alerta">
                    Usuario ou Senha invalidos!
                </div>)}

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container mb-5">
            <div className="row">
              <input type="email" className="form-input" placeholder="Login"
                {...register("username", { required: true, maxLength: { value: 45, message: "tenta dnv" } })} />
              <p className="text-danger">{errors.username?.message}</p>
            </div>
            <div className="row mt-5">
              <input type="password" className="form-input" placeholder="Senha"
                {...register("password", { required: true, minLength: { value: 5, message: "Senha deve ter mais que 5 caracteres" } })} />
              <p className="text-danger">{errors.password?.message}</p>
            </div>
          </div>
          <button className="btn btn-primary btn-lg">Login</button>

        </form>


      </header>
    </div>
  );
}
export default Login;