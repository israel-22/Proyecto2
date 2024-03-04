import React, { useState } from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { Body } from '../../Components/Body';
import { Title } from '../../Components/Title';
import { CardProduct } from './Components/CardProduct';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { PRIMARY_COLOR } from '../../common/color';


//Data prueba
export interface Product{
    id: number;
    name: string;
    detalle:string;
    stock:number;
    pathImage: string;
}


const products: Product[]=[
    {id: 1, name: 'Aki', detalle:'Supermercados AKI busca un bodeguero para el sur de Quito', stock: 10, pathImage:'https://www.metroecuador.com.ec/resizer/XCnIs-CZFTNmZcD7Go5ai_HiMro=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/3CQYTLK7CFEVHA35ZG3UKSJODA.jpeg'},
    {id: 2, name: 'Amazon',  detalle:'Amazon busca Choferes Profecionales  para el norte de Guayaquil', stock: 0, pathImage:'https://reportacero.com/wp-content/uploads/2020/07/amazon.jpg'},
    {id: 3, name: 'Banco Guayaquil',  detalle:'Banco de Guayaquil busca Contadores en Manta', stock: 6, pathImage:'https://nuvei.com/wp-content/uploads/2021/02/banco-guayaquil-1.png'},
    {id: 4, name: 'ServiEntrega',  detalle:'Grupo Entrega busca Chofetes Profecionales Tipo E en Cuenca', stock: 12, pathImage:'https://i.revistapym.com.co/old/2021/09/WhatsApp-Image-2021-09-25-at-1.08.55-PM.jpeg?w=728'},
    {id: 5, name: 'Zapatos Venus',  detalle:'Zapatos Venus busca Vendedores en Valle de los Chillos', stock: 4, pathImage:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDLwl8C5ehHnqwBVQ2UcM28WLDTvnbsAGZ9A&usqp=CAU'},
    {id: 6, name: 'NASA',  detalle:'La NASA busca Ingenieros Matematios y Quimicos Con Visa a EEUU ', stock: 4, pathImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png'},
    {id: 7, name: 'SRI',  detalle:'Servicios de Rentas Internas Busca Secretarias en Manta', stock: 4, pathImage:'https://taxstrategy.com.ec/wp-content/uploads/2021/01/unnamed.jpg'},
    {id: 8, name: 'Deprati',  detalle:'Almacenes Deprati busca Gerente  para Quisentro Shopyng', stock: 4, pathImage:'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012014/de_prati.png?itok=PLrBlNR_'},
    {id: 9, name: 'Pintulac',  detalle:'Pintulac busca Axiliares de Bodega en Quininde', stock: 4, pathImage:'data:image/png;base64,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'},
    {id: 10, name: 'Tia',  detalle:'Supermercados Tia Busca cajera en Latacunga', stock: 4, pathImage:'data:image/png;base64,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'},
    {id: 11, name: 'CNT',  detalle:'CNT busca Tecnicos en Redes en el centro de Loja', stock: 4, pathImage:'https://seeklogo.com/images/C/cnt-nuevo-fondo-cian-logo-338A6A63C1-seeklogo.com.png'},
    {id: 12, name: 'La Universal',  detalle:'La universal Busca Chef de Reposteria para elaboracion de chocolates en Santo Domingo', stock: 4, pathImage:'data:image/png;base64,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'},
    {id: 13, name: 'Pepsi',  detalle:'Pepsi busca Auxiliares de Bodega en Tumbaco norte de Quito', stock: 4, pathImage:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Pepsi_logo.svg/2560px-Pepsi_logo.svg.png'},
    {id: 14, name: 'Correos del Ecuador',  detalle:'Correos del Ecuador busca Analista de Datos en Orellana', stock: 4, pathImage:'https://www.gob.ec/sites/default/files/styles/medium/public/2018-10/logo2_0.png?itok=fZ_dneUj'},
    {id: 15, name: 'Microsoft',  detalle:'Microsoft busca Desarrolladores de Software en Manabi', stock: 4, pathImage:'https://i.pinimg.com/originals/b2/d9/06/b2d906c4b90768b63db1078cf365ca9f.jpg'},
    {id: 16, name: 'Huawei',  detalle:'Huawei busca Vendedores en el centro de Cotopaxi', stock: 4, pathImage:'https://static.vecteezy.com/system/resources/previews/020/190/713/non_2x/huawei-logo-huawei-icon-free-free-vector.jpg'},


]

export const HomeScreen = () => {
  //Hook que actualice el estado de los productos
  
  const [productsState, setProductsState] = useState(products);
  const navigation=useNavigation();

  //Función para cambiar el stock
  const handlerChangeStockProduct=(idProducto: number, quantity: number)=>{
    const updateStock=productsState.map(item=>item.id == idProducto
      ?{...item,
        stock:item.stock-quantity}
      : item);
      setProductsState(updateStock);
     navigation.goBack()
  }
  return ( 
    <View>
      <View>
    <StatusBar backgroundColor={PRIMARY_COLOR}/>
        <Title Title='Postulate'/>  
          <View style={style.contenedorLG} >
          <Image style={style.imagen2}  source={require('../../img/logoBlanco.png')} /> 
          <TouchableOpacity style={style.contenedorLG1}  onPress={()=>navigation.dispatch(CommonActions.navigate({name:'ScreenMenu'}))}>
        <Image style={style.imagen2}  source={require('../../img/volver.png')} /> 
        </TouchableOpacity>
          </View>
        <Body>
       <FlatList
        data={productsState}
        renderItem={({item})=><CardProduct product={item} handlerChangeStockProduct={handlerChangeStockProduct}/>}
        keyExtractor={item => item.id.toString()}/>
        </Body>
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
    height:'70%',
    width:'120%',
},
imagen1:{
  alignItems:'center',
  justifyContent:'center',
  height:'70%',
  width:'40%',
},
imagen2:{
height:'80%',
width:'60%',
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
contenedorLG1:{
  position:'absolute',
  //backgroundColor:'red',
  alignItems:'center',
  justifyContent:'center',
  height:90,
  width:90,
  right:250,
  top:-10,
}
})