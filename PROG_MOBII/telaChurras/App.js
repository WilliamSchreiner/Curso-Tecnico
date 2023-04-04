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
    
  },
  topo: {
    backgroundColor: '#34a69c',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    width: 320,
    height: 90,
    flexDirection: 'row',
  },
  logo: {
    height: 50,
    width: 50,
    borderRadius: 25,
    border: 'solid',
    borderColor: "#fff",
    borderWidth:1,
    marginTop:20,
    marginLeft: 40,
    marginRight: 8
  },
  containerTopo: {
    width: 200,
  },
  title: {
    marginTop: 25,
    fontSize: 20,
    color: '#fff',
    fontVariant: 'bold'
  },
  subTitle:{
    fontSize: 12,
    color: '#fff'
  },
  pergunta: {
    width: 280,
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 18
  },
  textCentral: {
    width: 270,
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  containerBoxes: {
    marginTop: 40,
    marginLeft: 30,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
  },
  Boxes: {
    backgroundColor: '#dff2ed',
    height: 80,
    width: 120,
    marginTop:8,
    marginLeft: 1,
    borderRadius: 5,
    textAlign: 'center'
  },
  boxIcon: {
    marginTop: 5,
    alignSelf: 'center',
    height: 30,
    width: 30,
  },
  boxTitle: {
    color: '#6cc5bd',
    fontSize: 13
  },
  boxText: {
    color: '#36a89e',
    fontSize: 14
  },
  
});
