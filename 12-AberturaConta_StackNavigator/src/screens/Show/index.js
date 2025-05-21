import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

import BackHeader from '../../components/BackHeader'
import Data from '../../components/Data'

export default (props) => {
  const data = props.route.params.data

  return (
    <SafeAreaView style={{flex:1}}>
      <BackHeader />
      <ScrollView>
        {data && <Data data={data} />}
      </ScrollView>
    </SafeAreaView>
  )
}
