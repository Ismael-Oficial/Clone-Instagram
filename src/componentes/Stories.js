import styles from './Stories.module.css'
import Eve from '../Imagens/Atom-Eve.jpg'
import America from '../Imagens/Capitain_America.jpg'
import Woman from '../Imagens/Super-woman.jpg'
import Cat from '../Imagens/Cat-Woman.jpg'
import Panther from '../Imagens/Black-Panther.jpg'
import Alerquina from '../Imagens/Arlequina-2.jpg'
import Bart from '../Imagens/Bart-Allen.jpg'
import Girl from '../Imagens/Supergirl.jpg'

function Stories() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={Eve} alt='' />
            </div>
            <div className={styles.card}>
                <img src={America} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Woman} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Cat} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Panther} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Alerquina} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Bart} alt='' />
            </div>
            <div className={styles.card}>
                <img src={Girl} alt='' />
            </div>
        </div>
    )
}

export default Stories