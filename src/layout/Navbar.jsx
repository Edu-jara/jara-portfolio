import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-all">
            <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo con estilo tipográfico moderno */}
                <a href="#" className="group flex items-center gap-2">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold text-sm tracking-wider shadow-md shadow-cyan-500/10 group-hover:scale-105 transition-transform">
                        EJ
                    </span>
                    <span className="hidden sm:inline font-semibold text-sm text-neutral-200 tracking-tight">
                        Eduardo Jara
                    </span>
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