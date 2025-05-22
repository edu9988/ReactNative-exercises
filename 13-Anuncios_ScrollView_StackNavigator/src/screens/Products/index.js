import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import Header from '../../components/Header'
import Slider from '../../components/Slider'
import Thumbnail from '../../components/Thumbnail'
import img from '../../assets/favicon.png'

const productList = [
  {
    id: 1,
    name: 'Cubo Semi-Mágico',
    price: '5x R$ 129,99',
    description: 'Entrega em até 5 dias úteis'
  },
  {
    id: 2,
    name: 'Balão de oxigênio',
    price: '4x R$ 129,99',
    description: 'Entrega em até 0 dias úteis'
  },
  {
    id: 3,
    name: 'Balão estratosférico',
    price: '2x R$ 129,99',
    description: 'Entrega em até 1096 dias úteis'
  },
  {
    id: 4,
    name: 'Balão meteorológico',
    price: '2x R$ 99,99',
    description: 'Entrega em até 5 dias úteis'
  },
  {
    id: 5,
    name: 'Cuba Libre',
    price: '6x R$ 109,99',
    description: 'Entrega em até 5 dias úteis'
  }
]

export default () => {
  const [products, setProducts] = useState(productList)

  return (
    <SafeAreaView>
      <Header />
      <Slider>
        {products.map(p => {
          return <Thumbnail
            key={p.id}
            photo={img}
            name={p.name}
            price={p.price}
            description={p.description}
          />
        })}
      </Slider>
    </SafeAreaView>
  )
}
