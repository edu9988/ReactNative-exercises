import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    gap: 30
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 'auto'
  },
  inputBox: {
    marginHorizontal: 30,
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: 34,
    width: 240,
    borderStyle: 'solid',
    borderWidth: 4,
    borderColor: 'black'
  },
})
