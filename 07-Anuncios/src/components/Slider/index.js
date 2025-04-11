import { View, Image, ScrollView } from 'react-native'

import styles from './styles'

export default (props) => (
  <ScrollView horizontal={true} style={styles.slider}>
    {props.children}
  </ScrollView>
)
