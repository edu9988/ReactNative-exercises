import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  inputBox: {
    marginHorizontal: 30,
    marginVertical: 30,
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
