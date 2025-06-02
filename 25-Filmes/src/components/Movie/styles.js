import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container:{
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
  image: {
    width: '100%',
    height: 250,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  name: {
    fontSize: 30,
    flex: 1
  }
})
