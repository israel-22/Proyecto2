import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Title } from '../Components/Title'
import { PRIMARY_COLOR} from '../common/color';
import { Body2 } from '../Components/Body2'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { BotonReutilizable } from '../Components/BotonReutilizable';
import { InputComponent } from '../Components/Input';
interface Loginform{
  nombre: string;
  apellido: string;
  ci:number;
  telefono:number;
  estadoCivil:string;
  nivelAcademico:string;
  profecion:string; 
}
const LoginScreen = () => {
  const[Form, setForm]=useState<Loginform>({
    nombre: '',
    apellido:'',
    ci:0,
    telefono:0,
    estadoCivil:'',
    nivelAcademico:'',
    profecion:'',
  });}
  const handlerChangeText = (name: string, value: string): void => {
    console.log(name);
    console.log(value);
}

 const handlerChangeNumber = (name: string, value: number): void => {
     console.log(name);
     console.log(value);
}
const handleChange = (name: string, value: string | number): void => {
  if (typeof value === 'string') {
      handlerChangeText(name, value);
  } else if (typeof value === 'number') {
      handlerChangeNumber(name, value);
  }
}
export const ScreenCV = () => {
  const navigation=useNavigation();
  
    return (
  
      <View>
      <View>
          <StatusBar backgroundColor={PRIMARY_COLOR}/>
          <Title Title='Curriculum Vitae'/>
          <View style={style.contenedorLG} >
          <Image style={style.imagen2}  source={require('../img/logoBlanco.png')} /> 
          </View>
         
          
          <Body2 >
              <InputComponent placeholder='Ingrese su Nombre' name={'nombre'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Apellido' name={'apellido'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='ingrese su Numero de Cedula'name={'ci'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Telefono' name={'telefono'} onChangeText={handlerChangeText}/>
                
                <BotonReutilizable title='Sigiente' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenCV1' }))}/> 
                <View  style={style.btnR}>
              <BotonReutilizable title='Retornar' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenMenu' }))}/> 
              </View>
          </Body2>
      </View>
        </View>
    )
  

}


const style=StyleSheet.create({
  contaner:{
      alignItems:'center',
      width:280,
      height:270,
      justifyContent:'center',
      left:40,
      //backgroundColor:'grey',      
  },
  imagen:{
      alignItems:'center',
      justifyContent:'center',
      height:'70%',
      width:'120%',
  },
  imagen1:{
    alignItems:'center',
    justifyContent:'center',
    height:'70%',
    width:'40%',
},
imagen2:{
  height:'80%',
  width:'60%',
},
  btnR:{
      top:20,
      flex:1,
    //backgroundColor:'#B2BABB',
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-around'
      
  },
  contenedorLG:{
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    height:90,
    width:90,
    left:300,
    top:-80,

  }
  
  
})