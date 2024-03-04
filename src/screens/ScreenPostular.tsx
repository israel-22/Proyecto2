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
            <Image style={styles.imagen2}  source={require('../img/logoBlanco.png')} /> 
            <TouchableOpacity style={styles.contenedorLG1}  onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}>
        <Image style={styles.imagen2}  source={require('../img/volver.png')} /> 
        </TouchableOpacity>
          </View>
          <View style={styles.contenedorLG}>
          {postulacionExitosa && (
                <View style={styles.mensaje}>
                    <Text style={styles.textoMensaje}>Postulación exitosa</Text>
                </View>
            )}</View>
      <Body2>
     
          <ScrollView style={styles.scrollView}>
         
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/aki.png')}  /> 
              <View style={styles.textConatiner}>
              <Text style={styles.txt}>Supermercados AKI busca un bodeguero para el sur de Quito</Text>
              </View>
              <View style={styles.btn}>
                <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/amazon.webp')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Amazon busca Choferes Profecionales  para el norte de Guayaquil</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/bancoG.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Banco de Guayaquil busca Contadores en Manta</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/entrega.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Grupo Entrega busca Chofetes Profecionales Tipo E en Cuenca</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/venus.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Zapatos Venus busca Vendedores en Valle de los Chillos</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/nasa.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>La NASA busca Ingenieros Matematios y Quimicos Con Visa a EEUU </Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/entrega.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Grupo Entrega busca Chofetes Profecionales Tipo E en Cuenca</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/sri.jpg')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Servicios de Rentas Internas Busca Secretarias en Manta</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/deprati.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Almacenes Deprati busca Gerente  para Quisentro Shopyng</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/banner.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Pintulac busca Axiliares de Bodega en Quininde</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/tia.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Supermercados Tia Busca cajera en Latacunga</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/CNT_Logo.svg.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>CNT busca Tecnicos en Redes en el centro de Loja</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/universal.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>La universal Busca Chef de Reposteria para elaboracion de chocolates en Santo Domingo</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/pepsi.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Pepsi busca Auxiliares de Bodega en Tumbaco norte de Quito</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/correoEcuador.png')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Correos del Ecuador busca Analista de Datos en Orellana</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>
  
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/microsoft.webp')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Microsoft busca Desarrolladores de Software en Manabi</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
              </View>
            </View>

            
            <View style={[styles.container, styles.marginBottom]}>
              <Image style={styles.imagen}  source={require('../img/huawei.webp')}  /> 
              <View style={styles.textConatiner}>
                <Text style={styles.txt}>Huawei busca Vendedores en el centro de Cotopaxi</Text>
              </View>
              <View style={styles.btn}>
              <ButtonComponent title='postular' onPress={handlePostular} />
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
        paddingHorizontal: 10,
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

