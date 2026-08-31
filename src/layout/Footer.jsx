import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-950 border-t border-neutral-900 py-10 mt-auto text-neutral-400 text-sm">
            <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Copyright y Autoría */}
                <div className="text-center md:text-left">
                    <p className="font-semibold text-white">Eduardo &middot; Desarrollador Web</p>
                    <p className="text-neutral-500 text-xs mt-1">
                        &copy; {new Date().getFullYear()} &bull; Todos los derechos reservados.
                    </p>
                </div>

                {/* Enlaces rápidos de navegación (Navbar links) */}
                <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-wider">
                    <a href="#" className="text-neutral-300 hover:text-cyan-400 transition-colors">Inicio</a>
                    <a href="#servicios" className="text-neutral-300 hover:text-cyan-400 transition-colors">Servicios</a>
                    <a href="#proyectos" className="text-neutral-300 hover:text-cyan-400 transition-colors"> Proyectos</a>
                    <a href="#contacto" className="text-neutral-300 hover:text-cyan-400 transition-colors">Contacto</a>
                </div>

                {/* Mención de la tecnología utilizada */}
                <div className="text-xs text-neutral-500 bg-neutral-900/60 border border-neutral-800/80 px-3.5 py-2 rounded-xl">
                    Desarrollado con <span className="text-cyan-400 font-medium">React</span> & <span className="text-emerald-400 font-medium">Tailwind CSS</span>
                </div>

            </div>
        </footer>
    );
}