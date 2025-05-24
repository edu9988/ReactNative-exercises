import { Image } from 'react-native'
import Field from '../../components/Field'
import styles from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

export default () => (
  <SafeAreaView>
    <Field title={'Experiência'}>
      Zero
    </Field>
    <Field title={'Projetos'}>
      Passar
    </Field>
  </SafeAreaView>
)
