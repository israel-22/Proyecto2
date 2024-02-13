import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { PRIMARY_COLOR } from '../common/color'
import { Title } from '../Components/Title'
import { Body } from '../Components/Body'
import { InputComponent } from '../Components/Input'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ButtonComponent } from '../Components/Buttom'
import { CommonActions, useNavigation } from '@react-navigation/native'

export const ScreenRegistro = () => {
  const navigation=useNavigation();

  return (
         <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        
        <Title Title='Registrate'/>
        <Body>
            <View style={style.contaner}>
             <Image style={style.imagen} source={require('../img/logoMorado.png')} /> 
            </View>
            <View style={style.txt}>
                <InputComponent placeholder='Nombre' name={'Nombre'} onChangeText={ScreenRegistro}/>
                <InputComponent placeholder='Apellido' name={'Apellido'} onChangeText={ScreenRegistro}/>
                <InputComponent placeholder='Correo Electronico' name={'Correo'} onChangeText={ScreenRegistro}/>
                <InputComponent placeholder='Usuario' name={'usuario'} onChangeText={ScreenRegistro}/>
                <InputComponent placeholder='Contraseña' name={'password'} onChangeText={ScreenRegistro}/>
                <InputComponent placeholder='Confirmar Contraseña' name={'Cpassword'} onChangeText={ScreenRegistro}/>
            </View>
            <View style={style.btnR}>
            <ButtonComponent title='Registrate' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'LoginScreen'}))}/>
            </View>
        </Body>
    </View>
        
  )
}

const style=StyleSheet.create({
  contaner:{
      alignItems:'center',
      width:280,
      height:190,
      justifyContent:'center',
      left:40,
      top:-30,
      //backgroundColor:'grey',      
  },
  imagenV:{
    width:'30%',
    height:'30%'
  },
  imagen:{
      alignItems:'center',
      justifyContent:'center',
      height:'50%',
      width:'30%',
  },
  btnR:{
      top:-10,
  },
  btn:{
      top:-125,
  },
  txt:{
      top:-30,  
  },
  ver:{
   alignItems:'center',
  justifyContent:'center',
  top:-60,
  left:'83%',
      width:'20%',
      height:'30%',
      //backgroundColor:'grey',
  },
  ver1:{
    alignItems:'center',
   justifyContent:'center',
   top:-20,
   left:'0%',
       width:'20%',
       height:'30%',
      backgroundColor:'grey',
   }
})
