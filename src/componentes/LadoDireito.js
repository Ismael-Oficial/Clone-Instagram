import styles from './LadoDireito.module.css'

function LadoDireito() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.card}  id={styles.card}></div>
                <p className={styles.subtxt}>IsmaelChaves2001</p>
                <h5 className={styles.submudar}>Mudar</h5>
            </div>

            <div>
                <h4>Sugestão para você</h4>
            </div>

            <div className={styles.container}>
                <div className={styles.card}></div>
                <p>Nome do Usuario 1</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}></div>
                <p>Nome do Usuario 2</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}></div>
                <p>Nome do Usuario 3</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}></div>
                <p>Nome do Usuario 4</p>
                <h5>Seguir</h5>
            </div>
        </div>
    )
}

export default LadoDireito