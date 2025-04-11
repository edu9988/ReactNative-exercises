import { SafeAreaView } from 'react-native-safe-area-context'
import { useState, useRef, useEffect } from 'react'
import { ScrollView } from 'react-native'

import Header from '../../components/Header'
import Form from '../../components/Form'
import Button from '../../components/Button'
import Data from '../../components/Data'

export default () => {
  const [data, setData] = useState(null)
  
  const formRef = useRef()

  return (
    <SafeAreaView style={{flex:1}}>
      <Header />
      <ScrollView>
        <Form ref={formRef} />
        <Button action={() => setData(formRef.current.getValues())} />
        {data && <Data data={data} />}
      </ScrollView>
    </SafeAreaView>
  )
}
