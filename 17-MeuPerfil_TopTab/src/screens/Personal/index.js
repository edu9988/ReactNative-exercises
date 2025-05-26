import { Image } from 'react-native'
import Field from '../../components/Field'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => (
  <SafeAreaView>
    <Image src={'https://avatars.githubusercontent.com/u/42843979?v=4'} style={styles.image} />
    <Field title={'Dados pessoais'}>
      Jose Eduardo Peres
    </Field>
  </SafeAreaView>
)
