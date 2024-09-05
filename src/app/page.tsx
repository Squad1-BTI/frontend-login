import { Button } from '@/components/button';
//import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1 className="text-primary ">Hello World!</h1>
      <div>
        <Button variant="default" size="sm" rounded="md">
          Delete
        </Button>
        <Button variant="default" size="sm" rounded="md">
          Cancel
        </Button>
        <Button variant="default" size="sm" rounded="none">
          Cancelado
        </Button>
      </div>
    </main>
  );
}
