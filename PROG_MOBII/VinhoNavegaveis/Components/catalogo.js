import { Text, View } from 'react-native';
import stylesBody from './style';

export default function Catalogo() {
  return (
    <View style={stylesBody.container}>
      <Text>Nossos Vinhos</Text>
      <Text>Trabalhamos com o melhor vinho dos seguintes tipos: Vinho Branco, Vinho rosé, Vinho tinto e Vinho seco.</Text>    
      
    </View>
  );
}