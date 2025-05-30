import { Switch, Text, View } from 'react-native'

import styles from './styles'
import LabeledSwitch from '../LabeledSwitch'

export default (props) => {
  const { day, saveDay, small, saveSmall } = props

  return (
    <View style={styles.container}>
      <LabeledSwitch value={day} save={saveDay}>Dia</LabeledSwitch>
      <LabeledSwitch value={small} save={saveSmall}>Pequeno</LabeledSwitch>
    </View>
  )
}
