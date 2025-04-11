import { Image } from 'react-native'

import styles from './styles'
import img from '../../assets/bmi.jpg'

export default () => (
  <Image source={img} style={styles.picture} />
)
