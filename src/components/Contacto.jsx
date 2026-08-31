import React from 'react';
import { Mail, PhoneCall, MapPin, ShieldCheck, Sparkles } from 'lucide-react';
import fotoPerfil from '../assets/perfil1.webp';

export default function Contacto() {
    return (
        <section id="contacto" className="py-24 bg-neutral-950 text-white relative overflow-hidden">

            {/* Efecto de luz ambiental de fondo */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">

                {/* Título de la sección */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-4">
                        <Sparkles className="w-3.5 h-3.5" /> Conectemos
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">próximo proyecto</span>
                    </h2>
                    <p className="text-neutral-400 mt-4 text-base sm:text-lg">
                        ¿Tenés un emprendimiento o querés llevar tu negocio al siguiente nivel digital? Escribime y lo charlamos sin compromiso.
                    </p>
                </div>

                {/* Tarjeta contenedora principal estilo perfil/contacto */}
                <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

                    {/* Columna Izquierda: Presentación humana y credibilidad */}
                    <div className="lg:col-span-6 space-y-6">

                        
                        {/* Contenedor de Foto y Datos Personales */}
                        <div className="flex items-center gap-5">
                            {/* Avatar o Foto - */}
                            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[2px] shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                                <div className="w-full h-full rounded-[14px] overflow-hidden bg-neutral-900">
                                    <img
                                        src={fotoPerfil}
                                        alt="Eduardo"
                                        className="w-full h-full object-cover object-center"
                                        style={{ minWidth: '100%', minHeight: '100%' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight">Eduardo</h3>
                                <p className="text-cyan-400 text-sm font-medium mt-0.5">Analista de Sistemas & Desarrollador Web</p>
                                <div className="flex items-center gap-1.5 text-neutral-400 text-xs mt-2">
                                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>City Bell, Buenos Aires 🇦🇷 &middot; Remoto</span>
                                </div>
                            </div>
                        </div>

                        <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                            Me especializo en transformar ideas en soluciones web reales, rápidas y orientadas a resultados comerciales. Trabajo de forma directa, transparente y enfocada en lo que tu proyecto realmente necesita para crecer.
                        </p>

                        <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 border border-neutral-800 p-3 rounded-xl">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Atención personalizada y asesoramiento técnico de punta a punta.</span>
                        </div>
                    </div>

                    {/* Columna Derecha: Canales directos de contacto (WhatsApp y Mail) */}
                    <div className="lg:col-span-6 flex flex-col space-y-4">

                        <div className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-1">
                            Canales de contacto directo
                        </div>

                        {/* Botón WhatsApp */}
                        <a
                            href="https://wa.me/5492215340285?text=Hola%20Eduardo,%20estuve%20viendo%20tu%20portfolio%20y%20quiero%20consultar%20por%20un%20proyecto%20web."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-850 transition-all group shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                                    <PhoneCall className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">WhatsApp Directo</h4>
                                    <p className="text-neutral-400 text-xs mt-0.5">Respuesta rápida para consultas y presupuestos</p>
                                </div>
                            </div>
                            <span className="text-emerald-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">Hablar &rarr;</span>
                        </a>

                        {/* Botón Email */}
                        <a
                            href="mailto:tottyfeli@outlook.com"
                            className="flex items-center justify-between p-5 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-850 transition-all group shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Correo Electrónico</h4>
                                    <p className="text-neutral-400 text-xs mt-0.5">Para propuestas formales o detalles técnicos</p>
                                </div>
                            </div>
                            <span className="text-cyan-400 font-semibold text-sm group-hover:translate-x-1 transition-transform">Enviar mail &rarr;</span>
                        </a>

                    </div>

                </div>



            </div>
        </section>
    );
}