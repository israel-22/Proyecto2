import React, { useEffect, useState } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Title } from '../Components/Title';
import { PRIMARY_COLOR, BODY_COLOR, TEXT_COLOR, INPUT_COLOR } from '../common/color';
import { Body2 } from '../Components/Body2';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { ButtonComponent } from '../Components/Buttom';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
interface CVData {
  nombre: string;
  apellido: string;
  ci: string;
  telefono: string;
  estadoCivil: string;
  nivelAcademico: string;
  profecion: string;
}

export const ScreenPostular = () => {
const navigation=useNavigation();
const [postulacionExitosa, setPostulacionExitosa] = useState<boolean>(false);

useEffect(() => {
    const timer = setTimeout(() => {
        setPostulacionExitosa(false);
    }, 3000);

    return () => clearTimeout(timer);
}, [postulacionExitosa]);


const dataFromScreenCV: CVData = {
  // Aquí debes proporcionar los datos de la ScreenCV o inicializarlos con valores por defecto
  nombre: '',
  apellido: '',
  ci: '',
  telefono: '',
  estadoCivil: '',
  nivelAcademico: '',
  profecion: '',
};

const handlePostular = () => {
  setPostulacionExitosa(true);
  console.log('Postulado:', dataFromScreenCV);
};
    
    return (
      <View >
        <View >
          <StatusBar backgroundColor={PRIMARY_COLOR}/>
          <Title Title='Postulate'/>
          <View style={styles.contenedorLG}>
            <Image style={styles.imagen2}  source={require('../img/MG-Logo-2010.png')} /> 
            <TouchableOpacity style={styles.contenedorLG1}  onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}>
        <Image style={styles.imagen2}  source={require('../img/volver.png')} /> 
        </TouchableOpacity>
          </View>
          {/* <View style={styles.contenedorLG}>
          {postulacionExitosa && (
                <View style={styles.mensaje}>
                    <Text style={styles.textoMensaje}>Postulación exitosa</Text>
                </View>
            )}</View> */}
      <Body2>
     
          <ScrollView style={styles.scrollView}>
         
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car1.jpeg')}  /> 
              <View style={styles.textConatiner}>
              <Text style={styles.txt}>Modelo 1</Text>
              </View>
              <View style={styles.btn}>
                <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>
            
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car3.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 2</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car4.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 3</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car5.jpg')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 4</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car6.jpg')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 5</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car7.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 6 </Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
            </View>
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/car4.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Modelo 7</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='comprar' onPress={handlePostular} />
              </View>
             
            </View>     
          </ScrollView>
          </Body2>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    scrollView: {
        paddingHorizontal: 30,
    },
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 15
    },
    marginBottom: {
        marginBottom: 10,
    },
    textContainer: {
        paddingHorizontal: 10,
        flex: 1,
    },
    txt: {
        fontSize: 15,
        paddingVertical: 10
    },
    imagen: {
        height: 110,
        width: 200,
        borderRadius: 50,
        top:10,
    },
    btn:{
      position: 'relative',
      width: '30%',
      left: '65%',
      top: '-80%',
      paddingVertical: 12,
      paddingHorizontal: 12,
    },
    container: {
      alignItems: 'flex-start',
      width: '100%',
      height: 230,
      top: 0,
      backgroundColor: 'white',
      borderRadius: 30,
    },
    
    textConatiner: {
      position: 'relative',
      paddingVertical: 12,
      paddingHorizontal: 12,
      width: '95%',
      height: '45%',
      left: 9,
      top: '10%',
    },
 
    imagen2: {
      height: '50%',
      width: '50%',
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
    },
    contenedorLG1:{
      position:'absolute',
      alignItems:'center',
      justifyContent:'center',
      height:90,
      width:90,
      right:250,
      top:-80,
    },

  mensaje: {
    
      position: 'absolute',
      top: 30,
      backgroundColor:INPUT_COLOR,
      padding: 10,
      borderRadius: 10,
      height:40,
      width:200,
      right:70
  },
  textoMensaje: {
      color: TEXT_COLOR,
      fontWeight: 'bold',
      fontSize:18,
  },
});

