import Logo from '../Imagens/Logo-font.jpeg'
import styles from './LadoEsquerdo.module.css'

import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { TbSend } from 'react-icons/tb'
import { BiVideoPlus } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'

function LadoEsquerdo() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt="Logo do Instagram" className={styles.img} />
            </div>
            <div className={styles.Topicos}><h3>
                < AiFillHome size={25} className={styles.icon} />
                <span />Página Inicial</h3></div>
            <div className={styles.Topicos}>
                < FaRegCompass size={25} className={styles.icon} />
                <p>Pesquisa</p></div>
            <div className={styles.Topicos}>
                < AiOutlineSearch size={25} className={styles.icon} />
                <p>Explorar</p></div>
            <div className={styles.Topicos}>
                < RiMessengerLine size={25} className={styles.icon} />
                <p>Reels</p></div>
            <div className={styles.Topicos}>
                < TbSend size={25} className={styles.icon} />
                <p>Mensagens</p></div>
            <div className={styles.Topicos}>
                < BiVideoPlus size={25} className={styles.icon} />
                <p>Notificações</p></div>
            <div className={styles.Topicos}>
                < FiHeart size={25} className={styles.icon} />
                <p>Criar</p></div>
        </div>
    )
}

export default LadoEsquerdo