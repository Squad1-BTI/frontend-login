import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";


function Login() {
    return (
        <div>
            <h1>Login</h1>
            <p>Insira suas credenciais para acessar sua conta</p>
            <Input
                
          type="email"
          placeholder="Seu email"
         
        />
        <Input
          type="password"
          placeholder="Sua senha"
           togglePassword={true}
            />
             <Button>
          Entrar
        </Button>
           <div> <span>Esqueceu sua senha?</span></div>
          
        </div>
    )
}

export default Login;