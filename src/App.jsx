import React from 'react';
import Layout from './layout/Layout';
import { portfolioData } from './data/portfolioData';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';


export default function App() {
  const { perfil } = portfolioData;

  return (
    <Layout>
      <Hero />
      <Servicios />
      <div className="max-w-5xl mx-auto px-6 py-12 w-full">

        
        <Proyectos />
        <Contacto/>
      </div>
    </Layout>
  );
}