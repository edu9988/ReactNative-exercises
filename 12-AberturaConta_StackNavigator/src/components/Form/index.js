import { Switch, Text, View } from 'react-native'
import { useState, forwardRef, useImperativeHandle } from 'react'
import { Picker } from '@react-native-picker/picker'
import Slider from'@react-native-community/slider'

import styles from './styles'
import Input from '../Input'
import EducationItems from '../EducationItems'

export default forwardRef( (props,refs) => {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [isFemale, setFemale] = useState(false)
  const [education, setEducation] = useState('medio')
  const [limit, setLimit] = useState(0)
  const [national, setNational] = useState(false)

  useImperativeHandle(refs, () => ({
    getValues: () => ({
      name,
      age,
      isFemale,
      education,
      limit,
      national
    })
  }))

  return (
    <>
      <Input
        label="Nome"
        mode="text"
        value={name}
        action={(input) => setName(input)}
      />

      <Input
        label="Idade"
        mode="numeric"
        value={age}
        action={(input) => setAge(input)}
      />

      <View style={styles.container}>
        <Text style={styles.text}>Sexo:</Text>
        <Picker
          style={styles.picker}
          selectedValue={isFemale}
          onValueChange={(value,index) => setFemale(value)}
        >
          <Picker.Item key={0} value={false} label="Masculino" />
          <Picker.Item key={1} value={true} label="Feminino" />
        </Picker>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Escolaridade:</Text>
        <Picker
          style={styles.picker}
          selectedValue={education}
          onValueChange={(value,index) => setEducation(value)}
          mode="dropdown"
        >
          {EducationItems}
        </Picker>
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Limite:</Text>
        <Slider
          style={styles.slider}
          value={limit}
          onValueChange={value => setLimit(value)}
          minimumValue={0}
          maximumValue={5000}
          step={100}
        />
      </View>

      <View style={styles.container}>
        <Text style={styles.text}>Brasileiro:</Text>
        <Switch
          value={national}
          onValueChange={value => setNational(value)}
        />
      </View>
    </>
  )
})
