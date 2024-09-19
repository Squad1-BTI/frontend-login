"use client"
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { useRouter } from "next/navigation";

function Register() {
  const router = useRouter();
  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
    router.push('/');
  };

  return (
    
    <div className="flex flex-col items-center w-full justify-center space-y-4 px-4 mt-20">
      <div className="flex items-center justify-start w-full max-w-sm">
        <img className="h-8 -mb-11" src="arrow-left.svg" alt="Left Arrow" />
      </div>
        <h1 className="text-4xl font-bold">Comece agora</h1>
        <p className="text-slate-500 mb-6">Crie sua conta</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">

        <label className="font-bold flex mb-4" htmlFor="email">Nome</label>
        <Input 
            type="email"
            placeholder="Seu nome"
            className=""
        />

        <label className="font-bold flex mb-4 mt-6" htmlFor="email">Email</label>
        <Input 
            type="email"
            placeholder="Seu email"
            className=""
        />

        <label className="font-bold flex mb-4 mt-6"  htmlFor="password">Senha</label>
        <Input
            type="password"
            placeholder="Sua senha"
            togglePassword={true}
            className=""
        />

        <label className="font-bold flex mb-4 mt-6"  htmlFor="password">Confirme sua senha</label>
        <Input
            type="password"
            placeholder="Sua senha"
            togglePassword={true}
            className=""
        />
        
        <Button className="mb-6 mt-8">Registrar</Button>
        <div className="text-sm flex items-center justify-center">
          <span className="text-slate-500 text-center">Tem uma conta?</span>
          <a href="/criar-conta" className="text-primary hover:underline ml-1">
              Conecte-se
          </a>
        </div>

      </form>
    </div>
  );
}

export default Register;