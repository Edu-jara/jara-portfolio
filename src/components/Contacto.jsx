import React, { useState } from 'react';
import { Mail, PhoneCall, MapPin, ShieldCheck, Sparkles, Send } from 'lucide-react';

export default function Contacto() {
    // 1. Estados adentro del componente
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        tipoProyecto: 'landing',
        mensaje: ''
    });

    const [enviando, setEnviando] = useState(false);
    const [estadoEnvio, setEstadoEnvio] = useState(null); // 'exito' | 'error' | null

    // 2. Manejador de cambios en los inputs
    const manejarCambio = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // 3. Envío del formulario (Abre WhatsApp con los datos formateados)
    const manejarEnvio = (e) => {
        e.preventDefault();
        setEnviando(true);

        try {
            // Mapeo de valores de selección a texto legible
            const tiposNombres = {
                landing: 'Landing Page (1 sola página)',
                corporativo: 'Sitio Corporativo (Multi-página)',
                sistema: 'Sistema a Medida / App Web',
                asesoramiento: 'Asesoramiento / No está seguro'
            };

            const textoWhatsApp = `*Nueva consulta desde el Portfolio web*%0A%0A` +
                `👤 *Nombre:* ${encodeURIComponent(formData.nombre)}%0A` +
                `✉️ *Email:* ${encodeURIComponent(formData.email)}%0A` +
                `📱 *Teléfono:* ${encodeURIComponent(formData.telefono)}%0A` +
                `💻 *Tipo de Web:* ${encodeURIComponent(tiposNombres[formData.tipoProyecto])}%0A` +
                `📝 *Idea/Mensaje:* ${encodeURIComponent(formData.mensaje)}`;

            // Número de WhatsApp configurado
            const urlWhatsApp = `https://wa.me/5492215340285?text=${textoWhatsApp}`;

            setTimeout(() => {
                setEnviando(false);
                setEstadoEnvio('exito');
                window.open(urlWhatsApp, '_blank');
            }, 600);

        } catch (error) {
            setEnviando(false);
            setEstadoEnvio('error');
        }
    };

    return (
        <section id="contacto" className="py-24 bg-neutral-950 text-white relative overflow-hidden">

            {/* Efecto de luz ambiental de fondo */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/10 blur-[130px] pointer-events-none rounded-full"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 space-y-12">

                {/* Título de la sección */}
                <div className="text-center max-w-2xl mx-auto">
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

                {/* Grid principal: Perfil a la izquierda y Formulario a la derecha en escritorios */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Columna Izquierda: Perfil y Canales rápidos (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Tarjeta de Perfil */}
                        <div className="bg-gradient-to-b from-neutral-900/90 to-neutral-950/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-6">
                            
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-emerald-500 p-[2px] shadow-lg shrink-0 overflow-hidden flex items-center justify-center">
                                    <div className="w-full h-full rounded-[14px] overflow-hidden bg-neutral-900">
                                        <img
                                            src="/perfil1.webp"
                                            alt="Eduardo Jara"
                                            className="w-full h-full object-cover object-center"
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

                            <p className="text-neutral-300 text-sm leading-relaxed">
                                Me especializo en transformar ideas en soluciones web reales, rápidas y orientadas a resultados comerciales. Trabajo de forma directa, transparente y enfocada en lo que tu proyecto realmente necesita para crecer.
                            </p>

                            <div className="flex items-center gap-2 text-xs text-neutral-400 bg-neutral-900/80 border border-neutral-800 p-3 rounded-xl">
                                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                                <span>Atención personalizada y asesoramiento técnico de punta a punta.</span>
                            </div>
                        </div>

                        {/* Accesos rápidos a WhatsApp y Mail */}
                        <div className="space-y-3">
                            <a
                                href="https://wa.me/5492215340285?text=Hola%20Eduardo,%20estuve%20viendo%20tu%20portfolio%20y%20quiero%20consultar%20por%20un%20proyecto%20web."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 hover:bg-neutral-850 transition-all group shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-110 transition-transform">
                                        <PhoneCall className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">WhatsApp Directo</h4>
                                        <p className="text-neutral-400 text-xs">Respuesta rápida para presupuestos</p>
                                    </div>
                                </div>
                                <span className="text-emerald-400 font-semibold text-xs group-hover:translate-x-1 transition-transform">Hablar &rarr;</span>
                            </a>

                            <a
                                href="mailto:tottyfeli@outlook.com"
                                className="flex items-center justify-between p-4 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 hover:bg-neutral-850 transition-all group shadow-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Correo Electrónico</h4>
                                        <p className="text-neutral-400 text-xs">Para propuestas o detalles técnicos</p>
                                    </div>
                                </div>
                                <span className="text-cyan-400 font-semibold text-xs group-hover:translate-x-1 transition-transform">Enviar mail &rarr;</span>
                            </a>
                        </div>

                    </div>

                    {/* Columna Derecha: Formulario Guiado (7 cols) */}
                    <div className="lg:col-span-7 bg-neutral-900/80 p-6 md:p-8 rounded-3xl border border-neutral-800/80 backdrop-blur-xl shadow-2xl">
                        <form onSubmit={manejarEnvio} className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-2 border-b border-neutral-800 pb-3 flex items-center gap-2">
                                <span>🚀</span> Cotizá tu Sitio Web
                            </h3>

                            {/* Nombre completo */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-neutral-300">Nombre Completo *</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    required
                                    value={formData.nombre}
                                    onChange={manejarCambio}
                                    placeholder="Ej. Valeria Gómez"
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all"
                                />
                            </div>

                            {/* Email y Teléfono */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-neutral-300">Email *</label>
                                    <input
                                        type="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={manejarCambio}
                                        placeholder="valeria@ejemplo.com"
                                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-medium text-neutral-300">Teléfono / WhatsApp *</label>
                                    <input
                                        type="tel"
                                        name="telefono"
                                        required
                                        value={formData.telefono}
                                        onChange={manejarCambio}
                                        placeholder="+54 11 ..."
                                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Selector de servicio */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-neutral-300">¿Qué tipo de web necesitás?</label>
                                <select
                                    name="tipoProyecto"
                                    value={formData.tipoProyecto}
                                    onChange={manejarCambio}
                                    className="w-full bg-neutral-950 border border-neutral-800 text-white rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-500 transition-all cursor-pointer"
                                >
                                    <option value="landing">Landing Page (1 sola página - Venta rápida)</option>
                                    <option value="corporativo">Sitio Corporativo (Multi-página)</option>
                                    <option value="sistema">Sistema a Medida / App Web</option>
                                    <option value="asesoramiento">No estoy seguro / Busco asesoramiento</option>
                                </select>
                            </div>

                            {/* Mensaje guiado */}
                            <div className="space-y-1">
                                <label className="text-xs font-medium text-neutral-300">Contanos sobre tu negocio o idea *</label>
                                <textarea
                                    name="mensaje"
                                    required
                                    rows={4}
                                    value={formData.mensaje}
                                    onChange={manejarCambio}
                                    placeholder="Ej: Tengo una distribuidora de vinos y quiero mostrar nuestro catálogo para que los clientes nos hagan pedidos directo por WhatsApp..."
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-all"
                                ></textarea>
                            </div>

                            {/* Botón de envío */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={enviando}
                                    className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-3.5 px-6 rounded-xl 
                                    transition-all duration-300 ease-in-out hover:scale-[1.01] active:scale-95 
                                    disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
                                >
                                    {enviando ? <span>Enviando consulta...</span> : <span className="flex items-center gap-2">Enviar cotización de proyecto <Send className="w-4 h-4" /></span>}
                                </button>

                                {estadoEnvio === 'exito' && (
                                    <p className="text-xs text-emerald-400 text-center font-medium pt-3">
                                        ¡Consulta lista! Se abrió WhatsApp para enviar el mensaje directo.
                                    </p>
                                )}
                                {estadoEnvio === 'error' && (
                                    <p className="text-xs text-red-400 text-center font-medium pt-3">
                                        Hubo un problema al procesar. Escribime directamente por WhatsApp.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}