import { Switch, Text, View } from 'react-native'

import styles from './styles'

export default (props) => {
  const { day, small } = props
  const bgOptions = {
    backgroundColor: day
      ? 'white'
      : '#222',
  }
  const fontOptions = {
    fontSize: small
      ? 22
      : 36,
    color: day
      ? '#222'
      : 'cyan'
  }

  return (
    <View style={[styles.container, bgOptions]}>
      <Text style={fontOptions}> "A vingança nunca é plena, mata a alma e envenena" (Seu Madruga) </Text>
    </View>
  )
}
