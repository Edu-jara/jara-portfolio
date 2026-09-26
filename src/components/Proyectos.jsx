import React from 'react';
import TarjetaProyecto from './TarjetaProyecto';
import styles from './Proyectos.module.css'; // Si usás CSS Module para la sección
import imagenDemo1 from '../assets/demo1.jpg';
import imagenDemo2 from '../assets/demo2.jpg';
import imagenDemo3 from '../assets/demo3.jpg';

const Proyectos = () => {
    // 1. ACÁ ARMÁS EL ARRAY CON TUS DATOS
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
            titulo: "E-Commerce",
            descripcion: "Tienda online interactiva con carrito de compras.",
            imagen: imagenDemo3,
            link: "https://react-burger-five-wine.vercel.app/#hamburgueseria" 
        }
    ];

    return (
        <section id="proyectos" className={styles.seccionProyectos}>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Mis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400"> Proyecto Web </span>
            </h2>
            
            <div className={styles.grilla}>
                {/* 2. ACÁ APLICÁS EL .MAP() PARA RECORRER EL ARRAY */}
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