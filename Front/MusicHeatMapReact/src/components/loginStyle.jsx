import { StyleSheet } from 'react-native';

var textColor = "#52b788" //b864b9 pink 95d5b2 green
var bgColor = "#1b2021"
 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: bgColor,
    justifyContent: 'center',
    alignItems: 'center'

  },
  heading: {
    fontSize: 30,
    marginTop: 120,
    fontWeight: 'bold',
    color: textColor,
    justifyContent: 'center'
  },
  LoginText: {
    marginTop: 150,
    fontSize: 25,
    marginBottom: 20,
    fontWeight: 'bold',
    color: textColor,
  },
  inputContainer: {

    marginBottom: 300,
    borderColor: textColor,
    padding: 5,
  },
  input: {
    flexDirection: 'row',
    width: '80%',
    padding: 10,
    fontSize: 20,
    borderColor: textColor,
    borderWidth: 1,
    borderBottomRightRadius: 10,
    borderTopStartRadius: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  icon: {
    backgroundColor: textColor,
    width: '20%',
    height: 60,
    borderTopLeftRadius: 10,

  },
  iconStyle: {
    marginTop: 2,
    alignSelf: 'center'
  },
  login: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: textColor,
    width: 150,
    padding: 10,
    color: bgColor,
    borderRadius: 10,
    alignSelf: 'center'
  },
  register: {
    marginTop: 10,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: textColor,
    width: 150,
    padding: 10,
    color: bgColor,
    borderRadius: 10,
    alignSelf: 'center'
  }

});
//export default styles;