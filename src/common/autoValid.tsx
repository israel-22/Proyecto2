import Snackbar from 'react-native-snackbar';
import { CV, User } from '../navegador/Stacknavigator';
import { Loginform } from '../screens/LoginScreen';
import { Registroform } from '../screens/ScreenRegistro';
import { CVform } from '../screens/ScreenCV';


export  const hasErrorFormLogin=(Form:Loginform)=>{
    return Form.usuario==''|| Form.password=='';

}

 export  const hasErrorRegistro=(Form:Registroform)=>{
    return Form.usuario==''|| Form.password==''|| Form.email=='';

 }
 export  const hasErrorCV=(Form:CVform)=>{
    return Form.nombre==''|| Form.apellido==''|| Form.ci==''|| Form.estadoCivil==''||Form.nivelAcademico==''
    ||Form.profecion==''||Form.telefono=='';

 }
 export const verifyExistUser=(users: User[], form: Loginform)=>{
   return users.filter(user=>user.usuario == form.usuario)[0];
 }
 export const verifyExistUserCV=(users: CV[], form: CVform)=>{
    return users.filter(user=>user.ci == form.ci)[0];
  }
export const showSnackBar =(message: string, background: string)=>{
    Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:background,
        textColor:'white'
    });
}

export const getIdNewUser=(users: User[])=>{
    const getIdUSer=users.map(user=>user.id);
    return Math.max(...getIdUSer)+1;
}
