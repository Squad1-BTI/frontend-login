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
