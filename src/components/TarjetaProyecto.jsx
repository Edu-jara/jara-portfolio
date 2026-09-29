import React from 'react';
import styles from './TarjetaProyecto.module.css';

const TarjetaProyecto = ({ titulo, descripcion, imagen, link }) => {
    return (
        <div className={styles.tarjeta}>
            <img src={imagen} alt={titulo} className={styles.imagen} />
            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.descripcion}>{descripcion}</p>

                {/* Botón directo a los demos */}
                <a href={link} target="_blank" rel="noopener noreferrer" className={styles.boton}>
                    Ver Proyecto
                </a>
            </div>
        </div>
    );
};

export default TarjetaProyecto;