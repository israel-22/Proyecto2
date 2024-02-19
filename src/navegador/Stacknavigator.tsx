import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { PRIMARY_COLOR } from '../common/color';
import { ScreenMenu } from '../screens/Menu/ScreenMenu';
import { ScreenPostular } from '../screens/ScreenPostular';
import { ScreenCV } from '../screens/ScreenCV';

//import { ScreenRegistro } from '../screens/ScreenRegistro';
import { useState } from 'react';
import { ScreenRegistro } from '../screens/ScreenRegistro';

//Datos de prueba
export interface User{
  id: number,
  usuario: string,
  email:string,
  password: string
}
const users:User[]=[
  {id:1,  usuario:'Usuario',email:'Usu@gmail.com', password:'123456'},
  {id:2,  usuario:'Isantos', email:'Isantos@gmail.com',password:'12345678'}
]
//Datos de prueba CV

export interface CV{
  nombre: string;
  apellido: string;
  ci:string;
  telefono:string;
  estadoCivil:string;
  nivelAcademico:string;
  profecion:string; 
}
const datos:CV[]=[
  {nombre:'Jose',  apellido:'Perez',ci:'0202288049', telefono:'0988765578',estadoCivil:'soltero',nivelAcademico:'Bachiller',profecion:'Bachiller'},
  {nombre:'Pdro',  apellido:'Ramos',ci:'0202289999', telefono:'0989965578',estadoCivil:'soltero',nivelAcademico:'Bachiller',profecion:'Bachiller'},
]
const Stack = createStackNavigator();

export const Stacknavigator=()=> {
  const [userLogin, setuserLogin] = useState(users)
  const handlerAddUser=(user:User)=>{
    setuserLogin([...userLogin,user])
  }
  const [userCV, setuserCV] = useState(datos)
  const handleUser=(datosCv:CV)=>{
    setuserCV([...userCV,datosCv])
  }
  return (
    <Stack.Navigator screenOptions={{cardStyle:{backgroundColor:PRIMARY_COLOR}}}>
      <Stack.Screen options={{headerShown:false}} name="LoginScreen" children={()=><LoginScreen user={userLogin}/>} /> 
      <Stack.Screen options={{headerShown:false}} name="ScreenMenu" component={ScreenMenu} />
      <Stack.Screen options={{headerShown:false}} name="ScreenCV" children={()=><ScreenCV userCv={userCV} setUserCV={ handleUser}/>} />
      <Stack.Screen options={{headerShown:false}} name="ScreenPostular" component={ScreenPostular} />
     <Stack.Screen options={{headerShown:false}} name="ScreenRegistro" children={()=><ScreenRegistro usersLogin={userLogin} setUsersLogin={handlerAddUser}/>}/>  

   
    </Stack.Navigator>
  );
  
}