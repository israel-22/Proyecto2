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
                hasIcon={true}
                accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                isPassword={hiddenPassword}/>            

            </View>
            <View style={stylesGlobal.textNavigation}>
            <ButtonComponent title='Registrate' onPress={handlerSaveInfo}/>
            </View>
        </Body>
    </View>
  )
}

