import styles from './LadoDireito.module.css'
import Viuva from '../Imagens/Black-Widow.jpg'
import Deadpool from '../Imagens/Deadpool.jpg'
import Homelander from '../Imagens/Homelander.jpg'
import Marvel from '../Imagens/Ms-Marvel.jpg'
import Perfil from '../Imagens/perfil.jpg'


function LadoDireito() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <div className={styles.card} id={styles.card}>
                    <img src={Perfil} alt='' />
                </div>
                <p className={styles.subtxt}>IsmaelChaves2001</p>
                <h5 className={styles.submudar}>Mudar</h5>
            </div>

            <div>
                <h4>Sugestão para você</h4>
            </div>

            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Viuva} alt='' />
                </div>
                <p>Naty.Romanoff</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Marvel} alt='' />
                </div>
                <p>Marvel_Danvers</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Homelander} alt='' />
                </div>
                <p>Capitain.Homelander</p>
                <h5>Seguir</h5>
            </div>
            <div className={styles.container}>
                <div className={styles.card}>
                    <img src={Deadpool} alt='' />
                </div>
                <p>god.Deadpool</p>
                <h5>Seguir</h5>
            </div>
        </div>
    )
}

export default LadoDireito