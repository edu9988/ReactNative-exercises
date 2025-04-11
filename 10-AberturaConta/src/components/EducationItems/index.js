import { Picker } from '@react-native-picker/picker'

export const education = [
  {
    id: 0, name: 'medio', label: 'Ensino Médio'
  },
  {
    id: 1, name: 'superior', label: 'Ensino Superior'
  },
  {
    id: 2, name: 'mestrado', label: 'Mestrado'
  },
  {
    id: 3, name: 'doutorado', label: 'Doutorado'
  },
  {
    id: 4, name: 'posdoc', label: 'Pós-Doutorado'
  },
  {
    id: 5, name: 'docente', label: 'Livre Docência'
  }
]

export default education.map( (value,index) => {
  return <Picker.Item key={index} value={value.name} label={value.label} />
})
