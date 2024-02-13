import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../common/color';
import { ScreenMenu } from '../screens/ScreenMenu';
import { ScreenPostular } from '../screens/ScreenPostular';
import { ScreenCV } from '../screens/ScreenCV';
import { ScreenCV1 } from '../screens/ScreenCV1';
import { ScreenPostular1 } from '../screens/ScreenPostular1';
import { ScreenPostular2 } from '../screens/ScreenPostular2';
import { ScreenPostular3 } from '../screens/ScreenPostular3';
import { ScreenPostular4 } from '../screens/ScreenPostular4';
import { ScreenRegistro } from '../screens/ScreenRegistro';


export type RootStackParamList = {
LoginScreen:undefined,
ScreenRegistro:undefined,
ScreenPrincipal: undefined,
ScreenMenu:undefined,
ScreenPostular:undefined,
ScreenPostular1:undefined,
ScreenPostular2:undefined,
ScreenPostular3:undefined,
ScreenPostular4:undefined,
ScreenCV:undefined,
ScreenCV1:undefined,

}
const Stack = createStackNavigator<RootStackParamList>();

export const Stacknavigator=()=> {
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:PRIMARY_COLOR}}}>
      <Stack.Screen options={{headerShown:false}} name="LoginScreen" component={LoginScreen} /> 
      <Stack.Screen options={{headerShown:false}} name="ScreenMenu" component={ScreenMenu} />
      <Stack.Screen options={{headerShown:false}} name="ScreenCV" component={ScreenCV} />
      <Stack.Screen options={{headerShown:false}} name="ScreenCV1" component={ScreenCV1} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular" component={ScreenPostular} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular1" component={ScreenPostular1} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular2" component={ScreenPostular2} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular3" component={ScreenPostular3} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular4" component={ScreenPostular4} />
      <Stack.Screen options={{headerShown:false}} name="ScreenRegistro" component={ScreenRegistro} />

   
    </Stack.Navigator>
  );
  
}