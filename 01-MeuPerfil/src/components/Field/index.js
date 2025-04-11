import { Text } from 'react-native';
import styles from './styles'

export default (props) => (
  <>
    <Text style={styles.title}>
      {props.title}
    </Text>
    <Text style={styles.content}>
      {props.children}
    </Text>
  </>
)
