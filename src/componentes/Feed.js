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
                comentario="Espero que você consiga chegar a tempo do aniversário da Nora, corre Barry, corre! "
            />

            <Card
                nome="Miles.Morales"
                foto={Miles}
                poster={Morales}
                curtido="PeterParker"
                destaque="Gwen.Stacy"
                comentario="Saudades Miles, vamos marcar de nos encontrarmos novamente..."
            />

            <Card
                nome="Virgil_Hawkins"
                foto={Shock}
                poster={Dual}
                curtido="Robert.Hawkins"
                destaque="Gear55.Oficial"
                comentario="Crossover insano entre os universos Marvel e DC. "
            />

            <Card
                nome="Joker.Coringa"
                foto={Joker}
                poster={Arlequina}
                curtido="Mr.Penguin"
                destaque="Arlequina"
                comentario="Meu amor pelo meu Coringa é mais forte do que as paredes de seu hospício. "
            />

            <Card
                nome="Tony.Stark"
                foto={Stark}
                poster={IronMan}
                curtido="Cap.Roger70"
                destaque="Naty.Romanoff"
                comentario="Temos negócios inacabados. Temos que voltar aonde tudo começou... "
            />

            <Card
                nome="Thanos"
                foto={Thanos}
                poster={Manopla}
                curtido="god.Deadpool"
                destaque="Gamora.Oficial"
                comentario="Poderoso Thanos, seu sucesso é minha felicidade Pai! "
            />
        </div>
    )
}

export default Feed