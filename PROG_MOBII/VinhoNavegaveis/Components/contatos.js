import { Text, View } from 'react-native';
import stylesBody from './style';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

export default function Contatos() {
  return (
   <View style={ stylesBody.contato }>
        <Text style={ stylesBody.titleContato }>Entre em contato conosco para comprar nossos produtos</Text>
      
        <View style={ stylesBody.contatoLista }>
          <View style={ stylesBody.contatoBox }>
            <FontAwesome name="phone" size={ 50 } color="#400303" />
            <Text style={ stylesBody.titleBoxContato}>Telefone:</Text>
            <Text style={ stylesBody.textBoxContato}>+55 21 000000000</Text>
          </View>
          
          <View style={ stylesBody.contatoBox }>
            <Entypo name="location-pin" size={ 50 } color="#400303" />
            <Text style={ stylesBody.titleBoxContato}>Endereço:</Text>
            <Text style={ stylesBody.textBoxContato}>Av. 123, 222 - Rio de Janeiro RJ</Text>
          </View>

          <View style={ stylesBody.contatoBox }>
            <MaterialIcons name="email" size={ 50 } color="#400303" />
            <Text style={ stylesBody.titleBoxContato}>Email:</Text>
            <Text style={ stylesBody.textBoxContato}>preferida@adega.com.br</Text>
          </View>

          <View style={stylesBody.contatoBox }>
            <FontAwesome name="instagram" size={ 50 } color="#400303" />
            <Text style={stylesBody.titleBoxContato}>Instagram:</Text>
            <Text style={ stylesBody.textBoxContato}>@adegapreferida</Text>
          </View>
        </View>
      </View>
  );
}