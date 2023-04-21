import styles from './Feed.module.css'

import { AiOutlineHeart } from 'react-icons/ai'
import { RiChat3Line } from 'react-icons/ri'
import { TbSend } from 'react-icons/tb'
import { FiBookmark } from 'react-icons/fi'
import { BsEmojiSmile } from 'react-icons/bs'

function Card(props) {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.BarraPerfil}>
                    <div className={styles.BarraPerfil}>
                        <img src={props.foto} alt='Foto de Perfil' className={styles.perfil} />
                        <h4 className={styles.name}>{props.nome}</h4>
                    </div>
                    <p className={styles.configs}>...</p>
                </div>
                <div className={styles.post}>
                    <img src={props.poster} alt='Imagem do Post' className={styles.post} />
                </div>
                <div className={styles.BarraFinal}>
                    <div>
                        <AiOutlineHeart size={30} className={styles.icon} />
                        <RiChat3Line size={30} className={styles.icon} />
                        <TbSend size={30} className={styles.icon} />
                    </div>
                    <FiBookmark size={30} className={styles.icon} />
                </div>
                <div className={styles.like}>
                    <p>Curtido por <b>{props.curtido}</b> e <b>outras pessoas</b></p>
                    <p><b>{props.destaque}</b> {props.comentario}</p>
                    <p id={styles.more}>mais</p>
                </div>
                <div className={styles.commentary}>
                    <input type='text' placeholder='Adicione um comentário...'/>
                    <BsEmojiSmile id={styles.icon}/><hr />
                </div>
            </div>
        </div>
    )
}

export default Card