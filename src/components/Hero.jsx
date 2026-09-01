import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { PhoneCall } from 'lucide-react';
import backgroundTech from '../assets/tech-background.jpeg';

export default function Hero() {
    const { perfil } = portfolioData;

    return (
        /* 1. La section ocupa el 100% del ancho de la pantalla y tiene la imagen de fondo */
        <section className="relative w-full h-[90vh] flex flex-col justify-center bg-neutral-950">

            {/* 1. Subimos la opacidad a 80 y cambiamos el modo de fusión a 'normal' o 'lighten' para que no quede apagada */}
            <div
                className="absolute inset-0 z-0 opacity-100 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: `url(${backgroundTech})` }}
            ></div>

            {/* Gradiente sutil para oscurecer y que el texto resalte legible */}
            {/* Gradiente dinámico: más oscuro solo a la izquierda para el texto, y transparente a la derecha */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-neutral-950 via-neutral-950/50 to-transparent pointer-events-none"></div>

            {/* 2. Contenedor centrado para que los textos no se desbalancen pero la imagen quede de fondo total */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 w-full">
                <div className="max-w-3xl">

                    {/* Etiqueta de disponibilidad */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300 mb-6 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Disponible para nuevos proyectos
                    </div>

                    {/* Nombre principal */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight">
                        {perfil.nombre}
                    </h1>

                    {/* Tu rol profesional */}
                    <p className="text-xl sm:text-2xl text-cyan-400 font-medium mt-3">
                        {perfil.rol}
                    </p>

                    {/* Breve descripción */}
                    <p className="text-base sm:text-lg text-neutral-300 mt-6 leading-relaxed">
                        Especializado en construir aplicaciones web de alto rendimiento, interfaces de usuario escalables y experiencias digitales cuidadas al detalle con React y Tailwind.
                    </p>

                    {/* Botones de acción rápida (CTA) */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                        <a
                            href="#proyectos"
                            className="px-6 py-3 rounded-lg bg-cyan-400 text-neutral-950 font-semibold hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-400/20 hover:scale-[1.02]"
                        >
                            Ver Proyectos Web
                        </a>

                        <a
                            href="https://wa.me/5492215340285?text=Hola%20Eduardo,%20vi%20tu%20portfolio%20y%20me%20gustaría%20contactarte."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-lg bg-emerald-600 border border-emerald-500 text-white font-medium hover:bg-emerald-500 transition-all flex items-center gap-2 group shadow-lg shadow-emerald-600/20 hover:scale-[1.02]"
                        >
                            <PhoneCall className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                            Hablemos por WhatsApp
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}