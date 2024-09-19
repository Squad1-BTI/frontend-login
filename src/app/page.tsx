"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Button } from '@/components/UI/button';
import { Input } from '@/components/UI/input';


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push("/register");
  }, [router]);
 
  return (
    <main>
      <div>
        <h1>Olá</h1>
      </div>
    </main>
  );
}