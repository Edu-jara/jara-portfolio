import React from 'react';
import styles from './TarjetaProyecto.module.css';

const TarjetaProyecto = ({ titulo, descripcion, imagen, link }) => {
    return (
        <div className={styles.tarjeta}>
            <img src={imagen} alt={titulo} className={styles.imagen} />
            <div className={styles.contenido}>
                <h3 className={styles.titulo}>{titulo}</h3>
                <p className={styles.descripcion}>{descripcion}</p>

                {/* Si el link es '#' (el del próximamente), podemos cambiar el comportamiento o el texto */}
                {link !== '#' ? (
                    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.boton}>
                        Ver Proyecto
                    </a>
                ) : (
                    <span className={styles.proximamente}>Próximamente</span>
                )}
            </div>
        </div>
    );
};

export default TarjetaProyecto;