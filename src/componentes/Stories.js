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
                <p className={styles.name}>Atomic_Eve</p>
            </div>
            <div className={styles.card}>
                <img src={America} alt='' />
                <p className={styles.name}>Cap.Roger70</p>
            </div>
            <div className={styles.card}>
                <img src={Woman} alt='' />
                <p className={styles.name}>MWoman_77</p>
            </div>
            <div className={styles.card}>
                <img src={Cat} alt='' />
                <p className={styles.name}>Cat.Girl5</p>
            </div>
            <div className={styles.card}>
                <img src={Panther} alt='' />
                <p className={styles.name}>Wakanda_King</p>
            </div>
            <div className={styles.card}>
                <img src={Alerquina} alt='' />
                <p className={styles.name}>Alerquina</p>
            </div>
            <div className={styles.card}>
                <img src={Bart} alt='' />
                <p className={styles.name}>Bart_Allen</p>
            </div>
            <div className={styles.card}>
                <img src={Girl} alt='' />
                <p className={styles.name}>Sgirl.Kara</p>
            </div>
        </div>
    )
}

export default Stories