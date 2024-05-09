import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Title } from '../../Components/Title'
import { PRIMARY_COLOR, BODY_COLOR, TEXT_COLOR } from '../../common/color';
import { BotonReutilizable } from '../../Components/BotonReutilizable'
import { Body2 } from '../../Components/Body2'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { stylesGlobal } from '../../theme/estilo';


export const ScreenMenu = () => {
  const navigation=useNavigation();
  return (

    <View>
    <View>
        <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Title Title='Menu Principal'/>
        <View style={style.contenedorLG} >
        <Image style={stylesGlobal.imagen2}  source={require('../../img/MG-Logo-2010.png')} /> 
        <TouchableOpacity style={stylesGlobal.contenedorLG1} onPress={()=>navigation.dispatch(CommonActions.navigate({name:'LoginScreen'}))}>
        <Image style={stylesGlobal.imagen2}  source={require('../../img/volver.png')} /> 
        </TouchableOpacity>
        </View>
      
        
        <Body2 >
            <View style={style.contaner} >
             <Image style={style.imagen}  source={require('../../img/mg-ehs.jpg')}  /> 
             
            </View>
            <View >
              
            <Text style={style.Text} >Consulte sus requerimientos AQUÍ!!</Text>
              </View>
            <View  style={style.btnR}>
            <BotonReutilizable title={'Contactos'}onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenCV'}))}/>
            <BotonReutilizable title={'Catálogo'} onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenPostular'}))}/>
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
      height:'85%',
      width:'135%',
      borderTopRightRadius:30,
        borderTopLeftRadius:30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 3,
        
  },
  imagen1:{
    alignItems:'center',
    justifyContent:'center',
    height:'70%',
    width:'40%',
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
  Text:{
    alignItems: 'center',
    justifyContent:'center',
    fontSize:27,
        fontWeight:'bold',
        color:'black',
        textAlign:'center'
  },

  
})