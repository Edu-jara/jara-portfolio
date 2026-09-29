import React from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import styles from './Proyectos.module.css'; 
import { Sparkles, Layers } from 'lucide-react'; // Librería de íconos
import imagenDemo1 from '../assets/demo1.jpg';
import imagenDemo2 from '../assets/demo2.jpg';
import imagenDemo3 from '../assets/demo3.jpg';

const Proyectos = () => {
    // Array de proyectos
    const listaProyectos = [
        {
            id: 1,
            titulo: "Sitio Web de Cabañas",
            descripcion: "Plataforma web para complejo turístico con sección de reservas, galería interactiva y detalles de hospedaje.",
            imagen: imagenDemo1,
            link: "https://reservas-caba-as-xi.vercel.app/"
        },
        {
            id: 2,
            titulo: "Catálogo de Bodega de Vinos",
            descripcion: "Sitio e-informacional para bodega boutique con cata virtual, fichas técnicas de cepas y sección de contacto.",
            imagen: imagenDemo2,
            link: "https://demo-bodega.vercel.app/#bodega"
        },
        {
            id: 3,
            titulo: "E-Commerce de Hamburguesería",
            descripcion: "Tienda online interactiva con menú visual, carrito de compras y pedidos directo por WhatsApp.",
            imagen: imagenDemo3,
            link: "https://react-burger-five-wine.vercel.app/#hamburgueseria" 
        }
    ];

    return (
        <section id="proyectos" className={styles.seccionProyectos}>
            
            {/* Encabezado con explicación clara para el cliente */}
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                
                {/* Badge de entrada */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                    <Sparkles className="w-3.5 h-3.5" /> Demos Interactivas
                </div>

                {/* Título Principal */}
                <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                    Proyectos & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Demos de Muestra</span>
                </h2>

                {/* Bajada persuasiva */}
                <p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                    Estas maquetas interactivas están diseñadas para que pruebes la velocidad, navegación y estética de mis desarrollos. Podés tomar uno como base, combinar secciones de distintos proyectos o diseñar una solución totalmente personalizada según lo que tu negocio necesite.
                </p>

                {/* Nota destacada sobre personalización */}
                <div className="inline-flex items-center justify-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl mt-2">
                    <Layers className="w-4 h-4 shrink-0" />
                    <span>Todas las demos son 100% adaptables a tu marca (colores, productos, funciones y textos).</span>
                </div>

            </div>

            {/* Grilla de proyectos */}
            <div className={styles.grilla}>
                {listaProyectos.map((proyecto) => (
                    <TarjetaProyecto
                        key={proyecto.id}
                        titulo={proyecto.titulo}
                        descripcion={proyecto.descripcion}
                        imagen={proyecto.imagen}
                        link={proyecto.link}
                    />
                ))}
            </div>

        </section>
    );
};

export default Proyectos;