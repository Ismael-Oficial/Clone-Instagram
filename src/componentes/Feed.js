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
            />

            <Card
                nome="Miles.Morales"
                foto={Miles}
                poster={Morales}
            />

            <Card
                nome="Virgil_Hawkins"
                foto={Shock}
                poster={Dual}
            />

            <Card
                nome="Joker.Coringa"
                foto={Joker}
                poster={Arlequina}
            />

            <Card
                nome="Tony.Stark"
                foto={Stark}
                poster={IronMan}
            />

            <Card
                nome="Thanos"
                foto={Thanos}
                poster={Manopla}
            />
        </div>
    )
}

export default Feed