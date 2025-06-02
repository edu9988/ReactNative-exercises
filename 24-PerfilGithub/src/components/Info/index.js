import { ScrollView, Text, View } from 'react-native'

import styles from './styles'
import Bold from '../Bold'

export default (props) => (
  <ScrollView style={styles.scroll}>
    <View style={styles.container}>
      <Text style={styles.text}>
        <Bold>Id:</Bold> {props.data.id}
      </Text>
      <Text style={styles.text}>
        <Bold>Nome:</Bold> {props.data.name}
      </Text>
      <Text style={styles.text}>
        <Bold>Repositórios:</Bold> {props.data.repos_url}
      </Text>
      <Text style={styles.text}>
        <Bold>Criado em:</Bold> {props.data.created_at}
      </Text>
      <Text style={styles.text}>
        <Bold>Seguidores:</Bold> {props.data.followers}
      </Text>
      <Text style={styles.text}>
        <Bold>Seguindo:</Bold> {props.data.following}
      </Text>
    </View>
  </ScrollView>
)
