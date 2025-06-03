import { Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import styles from './styles'
import ButtonBox from '../ButtonBox'

export default (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {props.title}
      {props.finished && '  '}
      {props.finished && <Text>
        <AntDesign name="checksquareo" size={30} color="green" />
      </Text>}
    </Text>
    <Text style={styles.description}>{props.description}</Text>
    <ButtonBox
      style={styles.buttonBox}
      remove={props.remove}
      edit={props.edit}
      markAsDone={props.markAsDone}
    />
  </View>
)
