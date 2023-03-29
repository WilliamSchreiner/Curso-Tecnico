import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import convidado from './assets/convidado.png';
import carne from './assets/carne.png';
import refrigerante from './assets/refrigerante.png';
import cerveja from './assets/cerveja.png';
import churrasco from './assets/churrasco.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      

      <View style={styles.topo}>
      <Image style={styles.logo} source = { churrasco } />
      <View style={styles.containerTopo}>

        <Text style={styles.title}>Churrasco em casa</Text>
        <Text style={styles.subTitle}>Calculando a comida e a bebida</Text>
      </View>
    </View>

      <View>
      <Text style={styles.pergunta}>
        Vai fazer um churrasco mas não sabe o que comprar?
      </Text>


      <Text style={styles.textCentral}>
        Final de semana chegando e vem aquela vontade de fazer um churrasco. 
        Nessa hora bate uma dúvida da quantidade de carne e de bebidas que cada convidado vai consumir. 
        Veja abaixo uma média do consumo por pessoa.
      </Text>
      <View style={styles.containerBoxes}>


      <View style={styles.Boxes}>
        <Image style={styles.boxIcon} source = { convidado }/>
        <Text style={styles.boxTitle}>
          Convidados
        </Text>
        <Text style={styles.boxText}>
          1
        </Text>
      </View>

      <View style={styles.Boxes}>
        <Image style={styles.boxIcon} source = { carne }/>
        <Text style={styles.boxTitle}>
          Carne
        </Text>
        <Text  style={styles.boxText}>
          400 GR
        </Text>
      </View>
      
      <View style={styles.Boxes}>
        <Image style={styles.boxIcon} source = { refrigerante }/>
        <Text style={styles.boxTitle}>
          Refrigerante
        </Text>
        <Text  style={styles.boxText}>
          700 ML
        </Text>
      </View>

      <View style={styles.Boxes}>
        <Image style={styles.boxIcon} source = { cerveja }/>
        <Text style={styles.boxTitle}>
          Cerveja
        </Text>
        <Text  style={styles.boxText}>
          4 Latas
        </Text>
      </View>
    </View>
    </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topo: {
    backgroundColor: '#34a69c',
    borderBottomEndRadius: 15
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    border: 'solid',
    borderColor: "#fff",
    borderWidth:1
  },
  containerTopo: {},
  title: {},
  subTitle:{},
  pergunta: {},
  textCentral: {},
  containerBoxes: {},
  Boxes: {
    backgroundColor: '#dff2ed',
    height: 80, width: 120
  },
  boxIcon: {},
  boxTitle: {color: '#6cc5bd', },
  boxText: {color: '#36a89e', },
  
});
