import React, {FC} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Logo} from './Logo'

export const CustomHeader: FC<any> = ({navigation, name}) => {
  const onBack = () => {
    navigation.navigate(name)
  }

  return (
    <View style={styles.container}>
      <View style={styles.navigation}>
        <TouchableOpacity>
          <Text onPress={onBack}
          >
            <View>
            <Image style={styles.img} source={require('../res/images/cross.png')} />
            </View>
          </Text>
        </TouchableOpacity>
        <Text style={styles.text}>Регистрация в кабинете врача</Text>
      </View>
      <View style={styles.logoContainer}>
        <Logo position={'relative'}
              width={60}
              height={60}
              marginBottom={16}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1E63EE',
    width: '100%',
    height: 144,
    zIndex: 10,
    position: 'relative',
    marginBottom: 60,
  },
  navigation: {
    marginLeft: 17,
    marginTop: 90,
    width: '70%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  img: {
    width: 14,
    height: 14,
    marginTop: 8,
  },
  logoContainer: {
    position: 'absolute',
    bottom: -58,
    left: '43%',
  },
})