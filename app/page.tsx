"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  let [helloWorld, setHelloWorld] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:3000/api/helloworld", { cache: 'no-store' })
      .then(async (res : Response) => {
        return await res.json();
      })
      .then((data : exampleData) => {
        setHelloWorld(data.hello);
      });
  }, [])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>{helloWorld}</div>
    </main>
  )
}
