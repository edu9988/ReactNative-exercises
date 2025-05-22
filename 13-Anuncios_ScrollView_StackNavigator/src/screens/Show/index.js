import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

import Product from '../../components/Product'
import img from '../../assets/favicon.png'
import BackHeader from '../../components/BackHeader'

export default (props) => {
  const data = props.route.params

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <BackHeader />
        {data && <Product
          photo={img}
          name={data.name}
          price={data.price}
          description={data.description}
        />}
      </ScrollView>
    </SafeAreaView>
  )
}
