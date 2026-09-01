import React from 'react';
import { portfolioData } from '../data/portfolioData';
import logoEJ from '../assets/logoEJ.png';

export default function Navbar() {
    return (
        /* Usamos fixed, top-0, left-0 y w-full para obligarlo a quedarse pegado al viewport sí o sí */
        <header className="fixed top-0 left-0 w-full z-50 bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 transition-all">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo interactivo corregido para que la manito aparezca bien */}
                <a 
                    href="#" 
                    className="group cursor-pointer flex items-center relative z-10"
                >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform flex items-center justify-center">
                        <img
                            src={logoEJ}
                            alt="Logo de la empresa"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </a>

                {/* Menú de navegación alineado a la derecha */}
                <nav className="flex items-center gap-8 text-sm font-medium">
                    <a
                        href="#servicios"
                        className="text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                        Servicios
                    </a>
                    <a
                        href="#proyectos"
                        className="text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                        Proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="text-neutral-300 hover:text-cyan-400 transition-colors"
                    >
                        Contacto
                    </a>
                </nav>

            </div>
        </header>
    );
}