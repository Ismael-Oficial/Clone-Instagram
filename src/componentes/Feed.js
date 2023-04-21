import Card from './Card'
import Flash from '../Imagens/Flash.jpg'
import Miles from '../Imagens/Spider-man.jpg'
import Shock from '../Imagens/Static-Shock.jpg'
import Joker from '../Imagens/Coringa.jpg'
import Stark from '../Imagens/Iron-man.jpg'
import Thanos from '../Imagens/Thanos.jpg'
import Morales from '../Imagens/Miles.jpg'
import Speed from '../Imagens/BarryAlen.jpg'
import Manopla from '../Imagens/Manopla.jpg'
import IronMan from '../Imagens/Stark.jpg'
import Arlequina from '../Imagens/Arlequina.jpg'
import Dual from '../Imagens/Dual.jpg'

function Feed() {
    return (
        <div>
            <Card
                nome="BarryAlen"
                foto={Flash}
                poster={Speed}
                curtido="Batman.Oficial"
                destaque="Iris.West"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />

            <Card
                nome="Miles.Morales"
                foto={Miles}
                poster={Morales}
                curtido="PeterParker"
                destaque="Gwen.Stacy"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />

            <Card
                nome="Virgil_Hawkins"
                foto={Shock}
                poster={Dual}
                curtido="Robert.Hawkins"
                destaque="Gear55.Oficial"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />

            <Card
                nome="Joker.Coringa"
                foto={Joker}
                poster={Arlequina}
                curtido="Mr.Penguin"
                destaque="Arlequina"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />

            <Card
                nome="Tony.Stark"
                foto={Stark}
                poster={IronMan}
                curtido="Cap.Roger70"
                destaque="Naty.Romanoff"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />

            <Card
                nome="Thanos"
                foto={Thanos}
                poster={Manopla}
                curtido="god.Deadpool"
                destaque="Gamora.Oficial"
                comentario="Lorem Ipsum is simply dummy text of the printing and typesetting industry... "
            />
        </div>
    )
}

export default Feed