import { Button } from '@/components/button';
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1>Hello World!</h1>
      <div>
      <Button variant="destructive" size="lg">
        Delete
      </Button>
      <Button variant="shadow" size="sm">
        Cancel
      </Button>
    </div>
    </main>
  );
}
