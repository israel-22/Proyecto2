import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from '../Components/Title';
import { PRIMARY_COLOR } from '../common/color';
import { Body } from '../Components/Body';
import { InputComponent } from '../Components/Input';
import { ButtonComponent } from '../Components/Buttom';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navegador/Stacknavigator';
import { getIdNewUser, hasErrorFormLogin, hasErrorRegistro, showSnackBar, verifyExistUser } from '../common/autoValid';
import { stylesGlobal } from '../theme/estilo';

export interface Registroform{
    usuario: string;
    password: string;
    email:string;
    hasError: boolean;
}

interface RegisterProps{
    usersLogin:User[];
    setUsersLogin:(user:User)=>void;
  }
  

export const ScreenRegistro = ({usersLogin,setUsersLogin}:RegisterProps) => {
const navegacion=useNavigation();

const[Form, setForm]=useState<Registroform>({
    usuario:'',
    password:'',
    email:'',
    hasError:false
});

const [hiddenPassword, setHiddenPassword] = useState(true);


 const handlerSaveInfo=()=>{

    if(hasErrorRegistro(Form)){
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

    // console.log(Form)
    const existUser=verifyExistUser(usersLogin,Form);
    if(existUser){
        showSnackBar("El usuario ya esta registrado",'Red');
        console.log('El usuario ya esta registrado');
        return;
    }

    const newUser:User={
        id: getIdNewUser(usersLogin),
        ...Form
      }
    
     //agregar el nuevo usario en el arreglo de usersLogin
  setUsersLogin(newUser)
  showSnackBar("Usuario registrado con éxito!", PRIMARY_COLOR)
  
  console.log(Form);
  //volver inicio sesión
  navegacion.goBack();
    }
    const handlerChangeText=(name: string, value:string)=>{
        //console.log(name);
        //console.log(value);
        setForm(prevState =>({
            ...prevState,
            [name]:value,
        }))
    }
    
  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Title Title='Registrate'/>
        <Body>
            <View style={stylesGlobal.containerForm}>
             <Image style={stylesGlobal.imagen} source={require('../img/logoMorado.png')} /> 
             <TouchableOpacity style={stylesGlobal.contenedorLG1} onPress={()=>navegacion.dispatch(CommonActions.navigate({name:'LoginScreen'}))}>
        <Image style={stylesGlobal.imagen2}  source={require('../img/volver.png')} /> 
        </TouchableOpacity>
            </View>
            <View style={stylesGlobal.contenedorForm}>
                <InputComponent placeholder='Usuario' name={'usuario'} onChangeText={handlerChangeText} hasError={Form.hasError}/>
                <InputComponent placeholder='Correo Electronico' name={'email'} onChangeText={handlerChangeText} hasError={Form.hasError}/>
                <InputComponent placeholder='Contraseña' 
                name={'password'} 
                onChangeText={handlerChangeText} 
                hasError={Form.hasError} 
                accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                isPassword={hiddenPassword}/>    

                  <TouchableOpacity style={style.ver}onPress={()=>setHiddenPassword(!hiddenPassword)}>
                <Image style={style.imagenV} source={require('../img/boton-de-visibilidad.png')}/>
                 </TouchableOpacity>        

            </View>
            <View style={stylesGlobal.textNavigation}>
            <ButtonComponent title='Registrate' onPress={handlerSaveInfo}/>
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
    left:'80%',
        width:'20%',
        height:'20%',
        //backgroundColor:'grey',

    }
})