import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import { Title } from '../Components/Title'
import { PRIMARY_COLOR, BODY_COLOR } from '../common/color';
import { Body2 } from '../Components/Body2'
import { BotonReutilizable } from '../Components/BotonReutilizable';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../Components/Buttom';
import { stylesGlobal } from '../../../Carrito_Compras_VES-main/src/theme/appTheme';

export const ScreenPostular = () => {

    const navigation=useNavigation();
    
    return (
      <View>
        <View>
          <StatusBar backgroundColor={PRIMARY_COLOR}/>
          <Title Title='Postulate'/>
          <View style={style.contenedorLG}>
            <Image style={style.imagen2}  source={require('../img/logoBlanco.png')} /> 
          </View>
          <Body2>
            <View style={[style.container, style.marginBottom]}>
              <Image style={style.imagen}  source={require('../img/aki.png')}  /> 
              <View style={style.textConatiner}>
                <Text style={style.txt}>Supermercados AKI busca un bodeguero  para el sur de Quito</Text>
              </View>
              <View style={style.btn}>
                <ButtonComponent title='postular' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}/>
              </View>
            </View>
  
            <View style={[style.container, style.marginBottom]}>
              <Image style={style.imagen}  source={require('../img/amazon.webp')}  /> 
              <View style={style.textConatiner}>
                <Text style={style.txt}>Amazon busca Choferes Profecionales  para el norte de Guayaquil</Text>
              </View>
              <View style={style.btn}>
                <ButtonComponent title='postular' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}/>
              </View>
            </View>

            <View style={[style.container, style.marginBottom]}>
              <Image style={style.imagen}  source={require('../img/bancoG.png')}  /> 
              <View style={style.textConatiner}>
                <Text style={style.txt}>Banco de Guayaquil busca Contadores en Manta</Text>
              </View>
              <View style={style.btn}>
                <ButtonComponent title='postular' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}/>
              </View>
            </View>
  
            <View style={style.btnR}>
            <ButtonComponent title='Siguiente' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenPostular1'}))}/>
            </View>
            <View style={style.btnR1}>
            <ButtonComponent title='Volver al Menu' onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}/>
            </View>
           
          </Body2>
        </View>
      </View>
    )
  }
  
  const style=StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      width: '100%',
      height: '30%',
      top: 0,
      backgroundColor: 'white',
      borderRadius: 30,
    },
    marginBottom: {
      marginBottom:10, 
    },
    textConatiner: {
      position: 'absolute',
      paddingVertical: 12,
      paddingHorizontal: 12,
      width: '95%',
      height: '40%',
      left: 9,
      top: '55%',
    },
    txt: {
      position: 'absolute',
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 10
    },
    imagen: {
      position: 'absolute',
      top: 10,
      height: '50%',
      width: '50%',
      borderRadius: 50,
    },
    btn: {
      position: 'absolute',
      width: '50%',
      right: '2%',
      top: '18%',
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    imagen2: {
      height: '80%',
      width: '60%',
      
    },
    btnR: {
      position: 'absolute',
      width: '50%',
      right: '2%',
      top: '101%',
    },
    btnR1: {
      position: 'absolute',
      width: '50%',
      left: '2%',
      top: '101%',
    },
  
    contenedorLG: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 90,
      width: 90,
      left: 300,
      top: -80,
    }
  })
