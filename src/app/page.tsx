import { Input } from '@/components/UI/input';

export default function Home() {
  return (
    <main className="flex flex-col items-center h-full w-full justify-center">
      <h1 className="text-primary ">Hello World!</h1>
      <div>
        <Input togglePassword={true} />
        <Input />
      </div>
    </main>
  );
}