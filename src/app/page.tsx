import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';
import Login from './login';
import HomePage from './HomePage';


export default function Home() {
  return (
    // <main className="flex flex-col items-center h-full w-full justify-center">
     <main>
      {/* <h1 className="text-primary">Login</h1> */}
      <div>
        <Login />
       
        {/* <Button>
          Delete
        </Button>
        <Button variant="default" size="sm">
          Entrar
        </Button> */}
        <HomePage />
      </div>
    </main>
  );
}
