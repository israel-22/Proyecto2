import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { INPUT_COLOR } from '../common/color';


interface InputProps{
    placeholder: string;
    name: string;
    isPassword?:boolean;
    hasIcon?:boolean;
    hasError?:boolean;
    //método que captura el valor del input
    onChangeText: (name: string, value: string) =>void;
}

export const InputComponent = ({placeholder, name, onChangeText,isPassword=false,hasError}:InputProps) => {
  return (
    <View>
    <TextInput
        placeholder={placeholder}
        keyboardType={'default'}
        style={(hasError)?{...styles.inputText,...styles.error}:{...styles.inputText}}
        onChangeText={(value: string)=>onChangeText(name, value)} secureTextEntry={isPassword}/>
        {
            (hasError)?<Text style={styles.errorTxt}>El campo es obligatorio</Text>:null
          }
     </View>
  )
 
}
// secureTextEntry={isPassword}=recordar instanciar en el inputText
const styles=StyleSheet.create({
    inputText:{
        backgroundColor:INPUT_COLOR,
        paddingHorizontal:20,
        borderRadius:10,
        marginVertical:10
    },
    error:{
        borderColor:'red',
        borderStyle:'solid',
        borderWidth:1
    },
    errorTxt:{
        color:'red',
        fontSize:12,
        fontWeight:'bold',

    },
})