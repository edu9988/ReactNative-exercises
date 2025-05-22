import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

import Job from '../../components/Job'
import BackHeader from '../../components/BackHeader'

export default (props) => {
  const data = props.route.params

  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView>
        <BackHeader />
        {data && <Job
          contact={data.contact}
          name={data.name}
          wage={data.wage}
          description={data.description}
        />}
      </ScrollView>
    </SafeAreaView>
  )
}
