"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';



export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/login");
  }, [router]);
 
  return (
    <main>
      <div>
        <h1>Olá</h1>
      </div>
    </main>
  );
}
