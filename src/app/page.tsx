import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1 className="text-primary">Hello World!</h1>
      <div>
        <Button>
          Delete
        </Button>
        <Button variant="default" size="sm">
          Cancel
        </Button>
        <Input
          type="email"
          placeholder="Seu email"
        />
        <Input
          type="password"
          placeholder="Sua senha"
        />
      </div>
    </main>
  );
}
