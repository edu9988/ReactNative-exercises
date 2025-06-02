import { FlatList, Text } from 'react-native'

import Movie from '../Movie'
import styles from './styles'

export default (props) => {
  return (
    <FlatList
      style={styles.list}
      data={props.data}
      keyExtractor={movie => movie.id}
      contentContainerStyle={styles.container}
      renderItem={movie => {
        const item = movie.item
        return <Movie
          foto={item.foto}
          nome={item.nome}
          sinopse={item.sinopse}
        />
      }}
    />
  )
}
