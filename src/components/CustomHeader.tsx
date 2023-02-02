import React, {FC} from 'react'
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

export const CustomHeader: FC<any> = ({navigation, name}) => {
  const onBack = () => {
    navigation.navigate(name)
  }

  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#1E63EE',
    width: '100%',
    height: 170,
    zIndex: 10,
    position: 'relative',
  },
  navigation: {
    marginLeft: 17,
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
})