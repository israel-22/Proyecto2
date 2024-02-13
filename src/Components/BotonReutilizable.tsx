import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { PRIMARY_COLOR } from '../common/color';

interface ButtonProps{
    title: string;
    onPress: () => void;
}

export const BotonReutilizable = ({title,onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles=StyleSheet.create({
    buttonContainer:{
        width:150,
        height:90,
        backgroundColor: PRIMARY_COLOR,
        paddingVertical:15,
        borderRadius:10
    },
    buttonText:{
        textAlign:'center',
        color:'white',
        fontSize:30,
        fontWeight:'bold'

    },

})