import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    margin: 'auto',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    padding: 20
  },
  picture: {
    width: 120,
    height: 120,
    marginHorizontal: 5
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    width: 120
  },
  name: {
    fontWeight: 'bold'
  },
  price: {
    color: 'green',
    fontWeight: 'bold'
  }
})
