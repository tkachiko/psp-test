import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Logo} from '../../components/Logo'
import {stylesContainer} from '../../../App'

export const EnterScreen = () => {
  return (
    <View style={stylesContainer.container}>
      <Logo width={112} height={112} marginBottom={16}/>
      <Text style={styles.heading}>Программа</Text>
      <Text style={styles.heading}>поддержки пациентов</Text>
      <Text style={styles.heading}>и врачей</Text>
      <TouchableOpacity>
        <Text style = {styles.text}>
          Регистрация
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style = {styles.button}>
          Врач
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    color: '#fff',
    fontSize: 30,
    display: 'flex',
    textAlign: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 21,
    lineHeight: 28,
    textAlign: 'center',
    marginTop: 136,
    marginBottom: 16,
  },
  button: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 15,
    borderColor: '#fff',
    fontSize: 17,
    color: '#fff',
    textAlign: 'center'
  }
})