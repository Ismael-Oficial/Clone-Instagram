import Logo from '../Imagens/Logo-font.png'
import styles from './LadoEsquerdo.module.css'

import { AiFillHome } from "react-icons/ai";
import { FaRegCompass } from "react-icons/fa";
import { AiOutlineSearch } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { BiVideoPlus } from 'react-icons/bi'
import { FiHeart } from 'react-icons/fi'

function LadoEsquerdo() {
    return (
        <div className={styles.container}>
            <div>
                <img src={Logo} alt="Logo do Instagram" className={styles.img} />
            </div>
            <div className={styles.Topicos}><h3>
                < AiFillHome className={styles.icon}/>
                <span />Página Inicial</h3></div>
            <div className={styles.Topicos}><p>
                < FaRegCompass className={styles.icon}/>Pesquisa</p></div>
            <div className={styles.Topicos}><p>
                < AiOutlineSearch className={styles.icon}/>
                Explorar</p></div>
            <div className={styles.Topicos}><p>
                < RiMessengerLine className={styles.icon}/>Reels</p></div>
            <div className={styles.Topicos}><p>
                < BsPlusSquare className={styles.icon}/>
                Mensagens</p></div>
            <div className={styles.Topicos}><p>
                < BiVideoPlus className={styles.icon}/>
                Notificações</p></div>
            <div className={styles.Topicos}><p>
                < FiHeart className={styles.icon}/>
                Criar</p></div>
        </div>
    )
}

export default LadoEsquerdo