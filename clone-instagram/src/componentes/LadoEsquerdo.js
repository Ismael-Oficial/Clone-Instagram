import Logo from '../Imagens/Logo-font.png'
import styles from './LadoEsquerdo.module.css'

function LadoEsquerdo() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt="Logo do Instagram" className={styles.img} />
            </div>

            <div className={styles.Topicos}><h3>Página Inicial</h3></div>
            <div className={styles.Topicos}><p>Pesquisa</p></div>
            <div className={styles.Topicos}><p>Explorar</p></div>
            <div className={styles.Topicos}><p>Reels</p></div>
            <div className={styles.Topicos}><p>Mensagens</p></div>
            <div className={styles.Topicos}><p>Notificações</p></div>
            <div className={styles.Topicos}><p>Criar</p></div>
            <div className={styles.Topicos}><p>Perfil</p></div>
        </div>
    )
}

export default LadoEsquerdo