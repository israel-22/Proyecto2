import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Title } from '../Components/Title'
import { PRIMARY_COLOR} from '../common/color';
import { Body2 } from '../Components/Body2'
import { CommonActions, useNavigation } from '@react-navigation/native';
import { BotonReutilizable } from '../Components/BotonReutilizable';
import { InputComponent } from '../Components/Input';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { CV } from '../navegador/Stacknavigator';
import { hasErrorCV, showSnackBar, verifyExistUserCV } from '../common/autoValid';
import { ButtonComponent } from '../Components/Buttom';

export interface CVform{
  nombre: string;
  apellido: string;
  ci:string;
  telefono:string;
  estadoCivil:string;
  nivelAcademico:string;
  profecion:string; 
  hasError:boolean;
}

interface CVProps{
  userCv:CV[],
  setUserCV:(user:CV)=>void;

}

export const ScreenCV = ({userCv,setUserCV}:CVProps) => {
  const navigation=useNavigation();
  const[cv, setCV]=useState<CVform>({
    nombre: '',
    apellido: '',
    ci:'',
    telefono:'',
    estadoCivil:'',
    nivelAcademico:'',
    profecion:'',
    hasError:false,
});
const handlerSaveInfo=()=>{

  if(hasErrorCV(cv)){
      setCV(prevState =>({
          ...prevState,
          hasError:true
      }))
      return;
  }
  setCV(prevState =>({
    ...prevState,
    hasError:false
}))

  // console.log(Form)
  const existUser=verifyExistUserCV(userCv,cv);
  if(existUser){
      showSnackBar("El registro ya existe",'Red');
      console.log('El registro ya existe');
      return;
  }

setUserCV(cv)
showSnackBar("Usuario registrado con éxito!", PRIMARY_COLOR)
console.log(cv);
//volver inicio sesión
navigation.goBack();
  };
  const handlerChangeText=(name: string, value: string)=>{
    setCV(prevState=>({
  ...prevState,
  [name]:value,
}));
  };
    return (
  
      <View>
      <View>
          <StatusBar backgroundColor={PRIMARY_COLOR}/>
          <Title Title='Curriculum Vitae'/>
          <View style={style.contenedorLG} >
          <Image style={style.imagen2}  source={require('../img/logoBlanco.png')} /> 
          <TouchableOpacity style={style.contenedorLG1}  onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}>
        <Image style={style.imagen2}  source={require('../img/volver.png')} /> 
        </TouchableOpacity>
          </View>
         
          
          <Body2 >
            <ScrollView>
              <InputComponent placeholder='Ingrese su Nombre' name={'nombre'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Apellido' name={'apellido'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='ingrese su Numero de Cedula'name={'ci'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Telefono' name={'telefono'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='ingrese su Estado Civil'name={'estadoCivil'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='Ingrese su Nivel Academico' name={'nivelAcademico'} onChangeText={handlerChangeText}/>
                <InputComponent placeholder='ingrese su Profecion'name={'profecion'} onChangeText={handlerChangeText}/>
                <ButtonComponent title='Aceptar' onPress={handlerSaveInfo} />
                {/* <BotonReutilizable title='Aceptar' onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'ScreenCV1' }))}/>  */}
                </ScrollView>
                
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

  },
  contenedorLG1:{
    position:'absolute',
    //backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    height:90,
    width:90,
    right:250,
    top:-80,
  }
  
  
})