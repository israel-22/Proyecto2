import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Title } from '../Components/Title';
import { ERROR_COLOR, PRIMARY_COLOR } from '../common/color';
import { Body } from '../Components/Body';
import { InputComponent } from '../Components/Input';
import { ButtonComponent } from '../Components/Buttom';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navegador/Stacknavigator';
import { hasErrorFormLogin, showSnackBar, verifyExistUser } from '../common/autoValid';
import { stylesGlobal } from '../theme/estilo';

export interface Loginform{
    usuario: string;
    password: string;
    hasError: boolean;
}

interface LoginProps{
    user:User[]
}

export const LoginScreen = ({user}:LoginProps) => {
const navegacion=useNavigation();

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

    if(hasErrorFormLogin(Form)){
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
    const existUser=verifyExistUser(user,Form);
    if(!existUser || existUser.password !=Form.password){
        showSnackBar("Usuario y/o  contraseña incorrecta",ERROR_COLOR);
        console.log('Usuario y/o  contraseña incorrecta');
        return;
    }
        console.log('Correcto')
        navegacion.dispatch(CommonActions.navigate({name:'ScreenMenu'}))
    
   
  }

  return (
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Title Title='Iniciar Sesión'/>
        <Body>
            <View style={stylesGlobal.containerForm}>
             <Image style={stylesGlobal.imagen} source={require('../img/logoMorado.png')} /> 
            </View>
            <View style={stylesGlobal.contenedorForm}>
                <InputComponent placeholder='Usuario' name={'usuario'} onChangeText={handlerChangeText} hasError={Form.hasError}/>
                <InputComponent placeholder='Contraseña' 
                name={'password'} 
                onChangeText={handlerChangeText} 
                hasError={Form.hasError} 
                hasIcon={true}
                accionIcon={()=>setHiddenPassword(!hiddenPassword)}
                isPassword={hiddenPassword}/>            
            </View>
            <View style={stylesGlobal.textNavigation}>
            <ButtonComponent title='Iniciar Sesión' onPress={handlerSendInfo}/>
            </View>
            <View style={stylesGlobal.textNavigation}>
            <ButtonComponent title='Registrate' onPress={()=>navegacion.dispatch(CommonActions.navigate({name:'ScreenRegistro'}))}/>
            </View>
        </Body>
    </View>
  )
}

