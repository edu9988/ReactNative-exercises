import { Image } from 'react-native'

import styles from './styles'
import img from '../../assets/d10-dice.jpg'

export default () => (
  <Image source={img} style={styles.picture} />
)
