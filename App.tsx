import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Stacknavigator } from './src/navegador/Stacknavigator';
const App =()=>{
  return(
    <NavigationContainer >
 <Stacknavigator/>
    </NavigationContainer>
  
  )
}
export default App;