import { Text, View } from 'react-native'

import styles from './styles'
import { education } from '../EducationItems/'

export default (props) => (<>
  <Text style={styles.text}>Nome: {props.data.name? props.data.name : 'Em branco'}</Text>

  <Text style={styles.text}>Idade: {props.data.age? props.data.age : 'Não informada'}</Text>

  <Text style={styles.text}>Sexo: {props.data.isFemale? 'Feminino' : 'Masculino'}</Text>

  <Text style={styles.text}>Escolaridade: {education.find(ed => ed.name === props.data.education).label}</Text>

  <Text style={styles.text}>Limite:{props.data.limit}</Text>

  <Text style={styles.text}>Brasileiro:{props.data.national? 'Sim' : 'Não'}</Text>
</>)
