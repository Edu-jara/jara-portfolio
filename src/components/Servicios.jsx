import React from 'react';
import { Sparkles, Globe, ShieldCheck, Zap, TrendingUp, Laptop, Rocket, Layers, PhoneCall } from 'lucide-react';

export default function Servicios() {
    return (
        <section id="servicios" className="py-24 bg-neutral-950 text-white relative overflow-hidden">
            
            {/* Efecto de luz ambiental de fondo (Glow sutil) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/10 blur-[150px] pointer-events-none rounded-full"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                
                {/* Título de la sección */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4">
                        <Sparkles className="w-3.5 h-3.5" /> Soluciones de Negocio
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                        Impulsá tu negocio con presencia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">digital profesional</span>
                    </h2>
                    <p className="text-neutral-400 mt-4 text-base sm:text-lg">
                        Creamos plataformas web pensadas estratégicamente para generar confianza, captar clientes y potenciar tus ventas.
                    </p>
                </div>

                {/* Contenedor de las dos soluciones principales (Landing vs Sitios Completos) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    
                    {/* Opción 1: Landing Pages */}
                    <div className="relative bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-cyan-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(6,182,212,0.08)] backdrop-blur-xl flex flex-col justify-between group hover:border-cyan-400/60 transition-all">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                                    <Rocket className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                                    Alto Impacto
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">Landing Pages (Una Página)</h3>
                            <p className="text-neutral-400 text-sm mb-6">
                                Ideal para emprendedores o negocios que necesitan salir al mercado rápido con un producto o servicio puntual, enfocándose 100% en la conversión.
                            </p>

                            <ul className="space-y-3 text-neutral-300 text-sm mb-8">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan-400 font-bold">✓</span>
                                    <span><strong>Diseño persuasivo:</strong> Estructura directa para captar la atención en segundos.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan-400 font-bold">✓</span>
                                    <span><strong>Llamado a la acción claro:</strong> Botón directo a WhatsApp y formularios ágiles.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-cyan-400 font-bold">✓</span>
                                    <span><strong>Velocidad extrema:</strong> Carga instantánea para no perder ningún cliente potencial.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                            <span>⏱️ Tiempo récord de entrega</span>
                            <span className="text-cyan-400 font-semibold">Ideal para campañas</span>
                        </div>
                    </div>

                    {/* Opción 2: Sitios Web Completos & Sistemas */}
                    <div className="relative bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-emerald-500/30 rounded-3xl p-8 shadow-[0_0_30px_rgba(16,185,129,0.08)] backdrop-blur-xl flex flex-col justify-between group hover:border-emerald-400/60 transition-all">
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                        
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                                    <Layers className="w-7 h-7" />
                                </div>
                                <span className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                                    Institucional / Sistemas
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">Sitios Web & Sistemas a Medida</h3>
                            <p className="text-neutral-400 text-sm mb-6">
                                Pensado para empresas o comercios que necesitan una presencia corporativa robusta con múltiples secciones o herramientas de gestión interna.
                            </p>

                            <ul className="space-y-3 text-neutral-300 text-sm mb-8">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong>Estructura multi-página:</strong> Inicio, Servicios, Proyectos/Catálogo y Contacto.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong>Lógica y gestión:</strong> Preparado para escalar con sistemas de venta o stock.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-emerald-400 font-bold">✓</span>
                                    <span><strong>Identidad corporativa:</strong> Diseño profesional alineado 100% a tu marca.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                            <span>⚙️ Escalable y robusto</span>
                            <span className="text-emerald-400 font-semibold">Máxima jerarquía</span>
                        </div>
                    </div>

                </div>

                {/* Bloque Inferior: Respaldo Técnico Llave en Mano */}
                <div className="bg-neutral-900/60 border border-neutral-800 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
                    <h4 className="text-lg font-bold text-white mb-4 text-center sm:text-left flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-400" />
                        Todo desarrollo incluye el paquete técnico:
                    </h4>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-neutral-800 text-cyan-400 shrink-0">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="text-sm font-semibold text-white">Dominio & Hosting</h5>
                                <p className="text-xs text-neutral-400 mt-1">Configuración inicial completa para que no te preocupes por servidores.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-neutral-800 text-cyan-400 shrink-0">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="text-sm font-semibold text-white">Seguridad SSL (HTTPS)</h5>
                                <p className="text-xs text-neutral-400 mt-1">Certificado de seguridad activo para transmitir absoluta confianza.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="p-2 rounded-xl bg-neutral-800 text-cyan-400 shrink-0">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div>
                                <h5 className="text-sm font-semibold text-white">Automatización</h5>
                                <p className="text-xs text-neutral-400 mt-1">Integración directa con WhatsApp para recibir consultas al instante.</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="https://wa.me/5492215340285?text=Hola%20Eduardo,%20estuve%20viendo%20tus%20servicios%20web%20y%20quiero%20consultar%20por%20un%20proyecto."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold transition-all shadow-lg shadow-emerald-600/30 hover:scale-[1.02]"
                        >
                            <PhoneCall className="w-5 h-5" />
                            Consultar por tu proyecto web
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}