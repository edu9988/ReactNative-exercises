import { Image } from 'react-native'

import styles from './styles'
import img from '../../assets/gas-pumps.jpg'

export default () => (
  <Image source={img} style={styles.picture} />
)
