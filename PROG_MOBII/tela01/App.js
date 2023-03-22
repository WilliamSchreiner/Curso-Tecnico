import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <Text style={styles.boxOpen}>Fundamentos do React Native</Text>
      <Text style={styles.boxOpen}>Expo e Expo CLI</Text>
      <Text style={styles.boxClose}>Extilização com StyleSheet</Text>
      <Text style={styles.boxClose}>Navegação</Text>
      <Text style={styles.boxClose}>ScrollView e FlatList</Text>
      <Text style={styles.boxClose}>Perifericos</Text>
      <Text style={styles.boxClose}>Styled Components</Text>
      
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
  boxClose: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
    lineHeight: 14,
    backgroundColor: '#f64348',
    marginTop: 10,
    width: 350,
    paddingLeft:20,
    paddingTop: 17,
    height: 50,
    borderRadius: 15,

    textAlign: 'left',
    fontWeight: 'bold'
  },
  boxOpen: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 14,
    lineHeight: 14,
    backgroundColor: '#00ff9f',
    marginTop: 10,
    width: 350,
    paddingLeft:20,
    paddingTop: 17,
    height: 50,
    borderRadius: 15,

    textAlign: 'left',
    fontWeight: 'bold'
  },
  title: {
    textAlign: 'center',
    marginTop: 70,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 30,
    fontSize: 24,
    lineHeight: 24,
    width: 350,
    height: 40,
    border: 'solid' ,
    borderLeftColor: '#fff',
    borderRightColor: '#fff',
    borderTopColor: '#fff',

  
  }
});
