import { Button } from '@/components/button';
import Login from './login';

//import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1>Insira suas credenciais para acessar sua conta</h1>
      <div>
        <Login></Login>
      </div>
  
      <div>
        <Button>
          Entrar
        </Button>
        {/* <Button variant="default" size="sm">
          Cancel
        </Button> */}
      </div>
    </main>
  );
}
