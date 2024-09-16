      "use client"
      import { Button } from "@/components/UI/button";
      import { Input } from "@/components/UI/input";
      import { useRouter } from "next/navigation";

    
   
  
function Login() {
           const router = useRouter();
          const handleSubmit = (e: { preventDefault: () => void; }) => {
              e.preventDefault();
           router.push('/home');
          };

          return (
            <div className="flex flex-col items-center h-screen w-full justify-center px-4">
              <img className="w-1/5" src="/images/logo.svg" alt="Logo" />
                  <h1 className="text-4xl font-bold mb-4">Login</h1>
                  <p className="text-textGray mb-6">Insira suas credenciais para acessar sua conta</p>
              <form onSubmit={handleSubmit} className="w-full max-w-sm">
                      <label className="font-bold" htmlFor="email">Email</label>
                      <Input 
                          type="email"
                          placeholder="Seu email"
                          className="mb-4"
                      />

                      <label className="font-bold"  htmlFor="password">Senha</label>
                    <Input
                          type="password"
                          placeholder="Sua senha"
                          togglePassword={true}
                          className="mb-4"
                          />
                      <div className="flex justify-between items-center mb-4">
                          <a href="/esqueceu-senha" className="text-right w-full text-sm text-primary hover:underline">
                              Esqueceu sua senha?
                          </a>
                </div>
                <Button className="bg-primary rounded-full text-white w-full mb-4">
                          Entrar
                      </Button>
                      <div className="text-sm text-center">
                          <span className="text-textGray">Não tem uma conta?</span>
                          <a href="/criar-conta" className="text-primary hover:underline ml-1">
                              Crie a sua conta aqui
                          </a>
                </div>
                <div className="flex items-center justify-center my-6">
                  <hr className="flex-grow border-line" />
                   <span className="mx-2 text-sm text-place">Ou</span>
                 <hr className="flex-grow border-line" />
                </div>
                <Button className="rounded-full  w-full mb-4">
                  <img src="/icons/google.svg" alt="Google" className="mr-2 h-4" />
                  Entrar com Google
                </Button>
                  </form>
              </div>
          );
      }

      export default Login;