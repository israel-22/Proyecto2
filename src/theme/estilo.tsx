import { StyleSheet } from "react-native";
import { PRIMARY_COLOR, TEXT_COLOR } from '../common/color';

export const stylesGlobal=StyleSheet.create({
    textPrincipal:{
        fontSize:17,
        fontWeight:'bold',
        color:TEXT_COLOR,

    },
    textDescription:{
        fontSize:15
    },
    containerForm:{
        marginVertical:10,
        alignItems:'center',
        width:280,
        height:190,
        justifyContent:'center',
        left:40,
        top:-30,
    },
    textNavigation:{
    marginTop:20,
    fontSize:15,
    color:PRIMARY_COLOR,
    fontWeight:'bold',
    textAlign:'center'
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
      contenedorForm:{
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
   
       },
       contenedorLG1:{
        position:'absolute',
        //backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        height:90,
        width:90,
        right:250,
        top:-80,
    
      },
      imagen2:{
        height:'60%',
        width:'60%',
      },
})