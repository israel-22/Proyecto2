import { CommonActions, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, View } from 'react-native';
import { Title } from '../Components/Title';
import { Body2 } from '../Components/Body2';
import { InputComponent } from '../Components/Input';
import { BotonReutilizable } from '../Components/BotonReutilizable';
import { PRIMARY_COLOR } from '../common/color';
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
export const ScreenCV1 =()=> {
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
              
                <InputComponent placeholder='ingrese su Estado Civil'name={'estadoCivil'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Nivel Academico' name={'nivelAcademico'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='ingrese su Profecion'name={'profecion'} onChangeText={handlerChangeText}/>
                <BotonReutilizable title='Aceptar' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenMenu' }))}/> 
             
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