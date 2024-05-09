import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from '../Components/Title';
import { PRIMARY_COLOR } from '../common/color';
import { Body } from '../Components/Body';
import { InputComponent } from '../Components/Input';
import { ButtonComponent } from '../Components/Buttom';
import { ScreenPostular } from './ScreenPostular';
import { CommonActions, useNavigation } from '@react-navigation/native';
//import Snackbar from 'react-native-snackbar';
import { ScreenRegistro } from './ScreenRegistro';

interface Loginform{
    usuario: string;
    password: string;
    hasError: boolean;
}

interface User{
    id: number,
    username: string,
    password: string
  }

  const users:User[]=[
    {id:1, username:'Usuario', password:'123456'},
    {id:2, username:'Isantos', password:'12345678'}
  ]

export const LoginScreen = () => {


const[Form, setForm]=useState<Loginform>({
    usuario:'',
    password:'',
    hasError:false
});

const [hiddenPassword, setHiddenPassword] = useState(true);


const handlerChangeText=(name: string, value:string)=>{
    //console.log(name);
    //console.log(value);
    setForm(prevState =>({
        ...prevState,
        [name]:value,
    }))

}

 const handlerSendInfo=()=>{

    if(Form.usuario=='' || Form.password==''){
        setForm(prevState =>({
            ...prevState,
            hasError:true
        }))
        return;
    }
    setForm(prevState =>({
        ...prevState,
           hasError:false
    }))
    console.log(Form)
    //Instanciat Snak Bar https://www.npmjs.com/package/react-native-snackbar
    if(!VerifyUser()){
        console.log('Usuario y/o  contraseña incorrecta')
    }else{
        console.log('Correcto')
        navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))
    }
   
  }
const VerifyUser=()=>{
    const User=users.filter(user=>user.username==Form.usuario && user.password==Form.password)[0];
    return User;
}
  const navigation=useNavigation();

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Title Title='Iniciar Sesión'/>
        <Body>
            <View style={style.contaner}>
             <Image style={style.imagen} source={require('../img/MG-Logo-2010.png')} /> 
            </View>
            <View style={style.txt}>
                <InputComponent placeholder='Usuario' name={'usuario'} onChangeText={handlerChangeText} hasError={Form.hasError}/>
                <InputComponent placeholder='Contraseña' name={'password'} onChangeText={handlerChangeText} hasError={Form.hasError} isPassword={hiddenPassword}/>
                <TouchableOpacity style={style.ver}onPress={()=>setHiddenPassword(!hiddenPassword)}>
                <Image style={style.imagenV} source={require('../img/boton-de-visibilidad.png')}/>
                 </TouchableOpacity>
            </View>
            <View style={style.btn}>
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
            </View>
            <View style={style.btnR}>
            <ButtonComponent title='Registrate' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenRegistro'}))}/>
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
        height:'80%',
        width:'80%',
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
    left:'80%',
        width:'20%',
        height:'20%',
        //backgroundColor:'grey',

    }
})