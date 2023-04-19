import { Text, View,ImageBackground } from 'react-native';
import stylesBody from './style';

export default function Inicio() {
  return (
    <ImageBackground 
      blurRadius={ 10 } 
      style={ stylesBody.inicio } 
      source={require('../assets/backgroundInicio.jpg')}>
    <Text style={stylesBody.subTitleInicio}>Adega Preferida</Text> 
    <Text style={stylesBody.textInicio}>Aqui você encontra os melhores e mias saborosos vinhos.</Text>   
    </ImageBackground>
  );
}