import Buttom from "@/components/buttom";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1>Hello World!</h1>
      <Buttom />
      <Buttom />
    </main>
  );
}
