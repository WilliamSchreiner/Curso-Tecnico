import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function App() {
  let [n , nSet] = useState(0);

  const onPressLearnMore = () => {
    n++;
    nSet(n);
  };
  
  return (
      <View style={styles.container}>

      <h2 style={styles.title}>Aula de 08/11/22.</h2>
      <Text style={styles.text}>Um otimo dia para testar coisas!</Text>

      <Button
      onPress={onPressLearnMore}
      title="Aumentar"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"/>

      <h3> {n} </h3>

      <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#fff',
    backgroundColor: '#920EF0',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5, 
    paddingTop: 5,
    borderRadius: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#B754F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  text: {
    backgroundColor: '#B754F0',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
});
