import { SafeAreaView } from 'react-native-safe-area-context'
import { useRef } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Button from '../../components/Button'
import Data from '../../components/Data'

export default () => {
  const formRef = useRef()

  const navigation = useNavigation()

  return (
    <SafeAreaView style={{flex:1}}>
      <Header />
      <ScrollView>
        <Form ref={formRef} />
        {/*<Button action={() => setData(formRef.current.getValues())} />*/}
        <Button action={() => navigation.navigate('Show', { data: formRef.current.getValues() })} />
        {/*data && <Data data={data} />*/}
      </ScrollView>
    </SafeAreaView>
  )
}
