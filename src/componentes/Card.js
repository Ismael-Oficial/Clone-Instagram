import styles from './Feed.module.css'

function Card(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.BarraPerfil}>
                    <div className={styles.BarraPerfil}>
                        <img src='' className={styles.perfil} />
                        <h4 className={styles.name}>{props.nome}</h4>
                    </div>
                    <p className={styles.configs}>...</p>
                </div>
                <div className={styles.post}></div>
            </div>
        </div>
    )
}

export default Card