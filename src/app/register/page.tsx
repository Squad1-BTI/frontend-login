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
    <div className="flex flex-col items-center w-full justify-center space-y-4 px-4">
      <img className="min-w-[501px]" src="/images/seta.svg" alt="Logo" />
        <h1 className="text-4xl font-bold mb-4">Login</h1>
        <p className="text-slate-500 mb-6">Crie sua conta</p>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">

        <label className="font-bold flex mb-2" htmlFor="email">Nome</label>
        <Input 
            type="email"
            placeholder="Seu nome"
            className=""
        />

        <label className="font-bold flex mb-2" htmlFor="email">Email</label>
        <Input 
            type="email"
            placeholder="Seu email"
            className=""
        />

        <label className="font-bold flex mb-2"  htmlFor="password">Senha</label>
        <Input
            type="password"
            placeholder="Sua senha"
            togglePassword={true}
            className=""
        />

        <label className="font-bold flex mb-2"  htmlFor="password">Confirme sua senha</label>
        <Input
            type="password"
            placeholder="Sua senha"
            togglePassword={true}
            className=""
        />
        
        <Button className="mb-6 mt-4">Registre-se</Button>
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


      /*

      import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';

export default function Register() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center pt-10">
        <div>
            <h1 className="text-black">Comece agora</h1>
            <div>
                <Button variant="default" size="sm">
                Cancel
                </Button>
                <p>Nome</p>
                <Input
                type="email"
                placeholder="Seu email"
                />
                <p>Email</p>
                <Input
                type="email"
                placeholder="Seu email"
                />
                <p>Senha</p>
                <Input
                type="password"
                placeholder="Sua senha"
                togglePassword={true}
                />
                <p>Confirme sua senha</p>
                <Input
                type="password"
                placeholder="Sua senha"
                togglePassword={true}
                />
                <Button>
                Delete
                </Button>
                <p>Tem uma conta?</p><Button>Conecte-se</Button>
            </div>
        </div>
      
    </main>
  );
}

*/