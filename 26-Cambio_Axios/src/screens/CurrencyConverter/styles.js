import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  view:{
    flex: 1,
    justifyContent: 'top'
  },
  header: {
    fontSize: 30,
    textAlign: 'center'
  },
  input: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    fontSize: 24,
    width: 250,
    height: 50,
    marginHorizontal: 'auto',
    marginTop: 15
  },
  text:{
    fontSize: 30,
    marginHorizontal: 30,
    marginTop: 30
  },
  picker:{
    marginHorizontal: 30,
  },
  show: {
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontSize: 28,
    marginTop: 0,
    width: '100%'
  },
})
