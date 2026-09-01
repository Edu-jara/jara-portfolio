import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col w-full">
      <Navbar />
      {/* Añadimos pt-20 para que el contenido no quede debajo del Navbar flotante */}
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}