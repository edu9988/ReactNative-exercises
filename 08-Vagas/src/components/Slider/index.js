import { ScrollView } from 'react-native'

import styles from './styles'

export default (props) => (
  <ScrollView style={styles.slider}>
    {props.children}
  </ScrollView>
)
