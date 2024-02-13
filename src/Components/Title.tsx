import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';
interface TitleProps{
    Title:string;
}
export const Title = ({Title}:TitleProps) => {
    const {height}=useWindowDimensions();
  return (

    <Text style={{height:height*0.12, ...style.title}}>{Title}</Text>
  )
}

const style=StyleSheet.create({
    title:{
        fontSize:27,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingVertical:30,
        color:'white',
        textAlign:'center'

    }
})
