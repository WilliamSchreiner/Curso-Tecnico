import { Text, View, Image} from 'react-native';
import stylesBody from './style';

export default function Catalogo() {
  return (
    <View style={stylesBody.catalogo}>
      <Text style={stylesBody.titleCatalogo}>Nossos Vinhos</Text>
      <Text style={stylesBody.textCatalogo}>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho Branco, Vinho rosé, Vinho tinto e Vinho seco.</Text>    
      
      <View style={ stylesBody.vinhoLista }>
        <View style={ stylesBody.boxVinho }>
          <Image resizeMode="contain" style={ stylesBody.vinhoImg } source={require('../assets/vinho-branco.jpg')} />
          <View style={ stylesBody.vinhoBoxTextos}>
            <Text style={ stylesBody.titleBoxVinho}>Chatigny Chardonnay</Text>
            <Text style={ stylesBody.textBoxVinho}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
          </View>
        </View>
        <View style={ stylesBody.boxVinho }>
          <Image resizeMode="contain" style={stylesBody.vinhoImg } source={require('../assets/vinho-rose.jpg')} />
          <View style={ stylesBody.vinhoBoxTextos}>
            <Text style={ stylesBody.titleBoxVinho}>Vinho Branco</Text>
            <Text style={ stylesBody.textBoxVinho}>Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.</Text>
          </View>
        </View>

      </View>
         

    </View>
  );
}