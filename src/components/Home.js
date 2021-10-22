import React from "react";

export default function Home() {
  return (
    <main>
      <img
        src="https://images.unsplash.com/photo-1631563458270-3ddbed28aaa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
        alt="wood wall"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">
          Hello there. Call me sigvant.
        </h1>
      </section>
    </main>
  );
}
