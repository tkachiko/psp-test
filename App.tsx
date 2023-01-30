import {View} from 'react-native'
import {EnterScreen, stylesContainer} from './src/screens/enter/EnterScreen'

export default function App () {
  return (
    <View style={stylesContainer.container}>
      <EnterScreen />
    </View>
  )
}
